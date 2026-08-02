variable "cloudflare_zone_name" {
  description = "Cloudflare zone domain name for CheneyPTA."
  type        = string
  default     = "cheneypta.org"
}

variable "cloudflare_api_token" {
  description = "Cloudflare API token. Prefer using CF_API_TOKEN environment variable."
  type        = string
  default     = ""
  sensitive   = true
}
