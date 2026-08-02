resource "cloudflare_ruleset" "redirects" {
  zone_id = data.cloudflare_zones.zone.result[0].id
  name    = "default"
  kind    = "zone"
  phase   = "http_request_dynamic_redirect"

  rules = [
    {
      description = "Givebacks"
      expression  = "(http.host in {\"cheneypta.org\" \"www.cheneypta.org\"} and ssl)"
      enabled     = false
      action      = "redirect"
      action_parameters = {
        from_value = {
          status_code = 302
          target_url = {
            value = "https://cheneypta.givebacks.com"
          }
        }
      }
    },
    {
      description = "PTA Nominations"
      expression  = "(http.host eq \"vote.cheneypta.org\" and ssl)"
      enabled     = true
      action      = "redirect"
      action_parameters = {
        from_value = {
          status_code = 302
          target_url = {
            value = "https://docs.google.com/forms/d/1o-DT5uXt1KjUXHT4kwUg9ssCksI8ZGo69NDcx8W_iOU/edit"
          }
        }
      }
    },
    {
      description = "Join"
      expression  = "(http.host eq \"join.cheneypta.org\" and ssl)"
      enabled     = true
      action      = "redirect"
      action_parameters = {
        from_value = {
          status_code = 302
          target_url = {
            value = "https://cheneypta.givebacks.com/shop?category=16376"
          }
        }
      }
    },
    {
      description = "Redirect from WWW to root"
      expression  = "(http.request.full_uri wildcard r\"https://www.*\")"
      enabled     = true
      action      = "redirect"
      action_parameters = {
        from_value = {
          status_code = 301
          target_url = {
            expression = "wildcard_replace(http.request.full_uri, r\"https://www.*\", r\"https://$${1}\")"
          }
        }
      }
    }
  ]
}
