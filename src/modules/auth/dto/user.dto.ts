interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  email?: string;
  status?: string;
  roleId?: string;
  permissions: [string];
}