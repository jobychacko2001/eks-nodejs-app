variable "private_subnet_ids" {
  description = "List of private subnet IDs"
  type        = list(string)
}

variable "eks_cluster_name" {
  description = "EKS Cluster name"
  default     = "private-eks-cluster"
}
