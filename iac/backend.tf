terraform {
  backend "s3" {
    # Backend values are supplied at init time from the local backend config file.
    # Use the helper script in this directory:
    #   ./init-terraform.ps1
    # or on macOS/Linux:
    #   ./init-terraform.sh
  }
}
