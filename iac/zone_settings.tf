data "cloudflare_zones" "zone" {
  name = var.cloudflare_zone_name
}

locals {
  zone_settings = {
    always_online              = "off"
    always_use_https           = "on"
    security_header = {
      strict_transport_security = {
        enabled            = true
        include_subdomains = true
        max_age            = 31536000
        preload            = true
        nosniff            = true
      }
    }
    min_tls_version           = "1.2"
    opportunistic_encryption  = "on"
    tls_1_3                   = "on"
    automatic_https_rewrites  = "on"
  }
}

resource "cloudflare_zone_setting" "settings" {
  for_each   = local.zone_settings
  zone_id    = data.cloudflare_zones.zone.result[0].id
  setting_id = each.key
  value      = each.value
}
