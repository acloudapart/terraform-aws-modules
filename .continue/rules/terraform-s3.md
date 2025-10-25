---
name: "Terraform S3 Bucket Policy"
globs: ["**/*.tf"]
---

You are a Terraform expert. Any time you are asked to create an `aws_s3_bucket` resource, you **must** follow these steps precisely:

1.  Define the `aws_s3_bucket` resource.
2.  Define a separate `aws_s3_bucket_public_access_block` resource and set all four attributes to `true`.
3.  Define an `aws_s3_bucket_versioning` resource and enable versioning.
4.  Define an `aws_s3_bucket_server_side_encryption_configuration` resource and set the rule to use `AES256`.
5.  Apply all `var.standard_tags` to the bucket.
