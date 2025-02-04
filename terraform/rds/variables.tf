variable "vpc_id" {}
variable "private_subnet_ids" {
  description = "List of private subnet IDs"
  type        = list(string)
}
variable "db_username" {
  description = "RDS username"
  default     = ""
}
variable "db_password" {
  description = "RDS password"
  default     = ""
}
