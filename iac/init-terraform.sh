#!/usr/bin/env bash

# Initialize Terraform using the default.s3.tfbackend file.
# Ensure the local backend file contains your backend credentials.

backend_config="default.s3.tfbackend"
if [ ! -f "$backend_config" ]; then
  echo "Backend config file '$backend_config' not found." >&2
  exit 1
fi

terraform init -backend-config="$backend_config"
