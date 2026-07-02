import {
  TaskPriorityEnumType,
  TaskStatusEnumType,
} from "../constant";

export type UserType = {
  _id: string;
  name: string;
  email: string;
  profilePicture: string | null;
  isEmailVerified: boolean;
  currentWorkspace: WorkspaceType | string | null;
  createdAt: string;
  updatedAt: string;
};

export type WorkspaceType = {
  _id: string;
  name: string;
  description: string;
  owner: string;
  inviteCode: string;
  createdAt: string;
  updatedAt: string;
};

export type WorkspaceWithMembersType = WorkspaceType & {
  members: unknown[];
};

export type PaginationType = {
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  totalPages: number;
  skip: number;
};

export type ProjectType = {
  _id: string;
  name: string;
  description: string;
  emoji: string;
  workspace: string;
  createdBy?: unknown;
  createdAt: string;
  updatedAt: string;
};

export type CreateWorkspaceResponseType = {
  message: string;
  workspace: WorkspaceType;
};

export type CurrentUserResponseType = {
  message: string;
  user: UserType;
};

export type loginType = {
  email: string;
};

export type registerType = {
  name: string;
  email: string;
};

export type LoginResponseType = {
  message: string;
  user: UserType;
};

export type AllWorkspaceResponseType = {
  message: string;
  workspaces: WorkspaceType[];
};

export type CreateWorkspaceType = {
  name: string;
  description?: string;
};

export type EditWorkspaceType = {
  workspaceId: string;
  data: {
    name: string;
    description?: string;
  };
};

export type WorkspaceByIdResponseType = {
  message: string;
  workspace: WorkspaceType;
};

export type AllMembersInWorkspaceResponseType = {
  message: string;
  roles: unknown[];
  members: {
    _id: string;
    role: {
      _id: string;
      name: string;
      permissions: string[];
    };
    userId: {
      _id: string;
      name: string;
      email: string;
      profilePicture: string | null;
    };
    joinedAt: string;
  }[];
};

export type AnalyticsResponseType = {
  message: string;
  analytics: {
    totalTasks: number;
    overdueTasks: number;
    completedTasks: number;
  };
};

export type ChangeWorkspaceMemberRoleType = {
  workspaceId: string;
  data: {
    memberId: string;
    roleId: string;
  };
};

export type CreateProjectPayloadType = {
  workspaceId: string;
  data: {
    name: string;
    description?: string;
    emoji?: string;
  };
};

export type ProjectResponseType = {
  message: string;
  project: ProjectType;
};

export type AllProjectPayloadType = {
  workspaceId: string;
  pageSize?: number;
  pageNumber?: number;
  skip?: boolean;
};

export type AllProjectResponseType = {
  message: string;
  projects: ProjectType[];
  pagination: PaginationType;
};

export type ProjectByIdPayloadType = {
  workspaceId: string;
  projectId: string;
};

export type EditProjectPayloadType = {
  projectId: string;
  workspaceId: string;
  data: {
    name: string;
    description?: string;
    emoji?: string;
  };
};

export type CreateTaskPayloadType = {
  workspaceId: string;
  projectId: string;
  data: {
    title: string;
    description: string;
    priority: TaskPriorityEnumType;
    status: TaskStatusEnumType;
    assignedTo?: string | null;
    notes?: string;
    dueDate?: string | null;
  };
};

export type EditTaskPayloadType = {
  taskId: string;
  workspaceId: string;
  projectId: string;
  data: Partial<{
    title: string;
    description: string;
    priority: TaskPriorityEnumType;
    status: TaskStatusEnumType;
    assignedTo: string;
    notes: string;
    dueDate: string;
  }>;
};

export type TaskType = {
  _id: string;
  title: string;
  description?: string;
  project?: {
    _id: string;
    emoji: string;
    name: string;
  };
  priority: TaskPriorityEnumType;
  status: TaskStatusEnumType;
  assignedTo: {
    _id: string;
    name: string;
    profilePicture: string | null;
  } | null;
  notes: string;
  createdBy?: unknown;
  dueDate: string;
  taskCode: string;
  createdAt?: string;
  updatedAt?: string;
};

export type AllTaskPayloadType = {
  workspaceId: string;
  projectId?: string | null;
  keyword?: string | null;
  priority?: TaskPriorityEnumType | null;
  status?: TaskStatusEnumType | null;
  assignedTo?: string | null;
  dueDate?: string | null;
  pageNumber?: number | null;
  pageSize?: number | null;
};

export type AllTaskResponseType = {
  message: string;
  tasks: TaskType[];
  pagination: PaginationType;
};
