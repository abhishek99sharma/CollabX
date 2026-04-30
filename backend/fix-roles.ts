import mongoose from "mongoose";
import "dotenv/config";
import MemberModel from "./src/models/member.model";
import WorkspaceModel from "./src/models/workspace.model";
import RoleModel from "./src/models/roles-permission.model";
import { Roles } from "./src/enums/role.enum";

async function fixRoles() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to database...");

    const managerRole = await RoleModel.findOne({ name: Roles.MANAGER });
    const memberRole = await RoleModel.findOne({ name: Roles.MEMBER });

    if (!managerRole || !memberRole) {
      console.log("Roles not found in database. Run seeder first.");
      process.exit(1);
    }

    const members = await MemberModel.find({});
    console.log(`Found ${members.length} members to process.`);

    let updatedCount = 0;
    for (const member of members) {
      const workspace = await WorkspaceModel.findById(member.workspaceId);
      if (!workspace) continue;

      if (workspace.manager.toString() === member.userId.toString()) {
        member.role = managerRole._id as any;
      } else {
        member.role = memberRole._id as any;
      }
      
      await member.save();
      updatedCount++;
    }

    console.log(`Successfully fixed roles for ${updatedCount} members!`);
    process.exit(0);
  } catch (error) {
    console.error("Error fixing roles:", error);
    process.exit(1);
  }
}

fixRoles();
