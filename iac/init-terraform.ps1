#!/usr/bin/env pwsh

# Initialize Terraform using the default.s3.tfbackend file.
# Ensure the local backend file contains your backend credentials.

$backendConfig = "default.s3.tfbackend"
if (-not (Test-Path $backendConfig)) {
    Write-Error "Backend config file '$backendConfig' not found."
    exit 1
}

terraform init -backend-config "$backendConfig"
