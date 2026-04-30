import React from "react";
import { useAuthContext } from "@/context/auth-provider";
import { PermissionType } from "@/constant";

interface PermissionsGuardProps {
  requiredPermission: PermissionType;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const PermissionsGuard: React.FC<PermissionsGuardProps> = ({
  requiredPermission,
  children,
  fallback = null,
}) => {
  const { hasPermission } = useAuthContext();

  if (!hasPermission(requiredPermission)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default PermissionsGuard;
