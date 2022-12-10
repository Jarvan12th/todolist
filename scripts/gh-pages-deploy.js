/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    // Checkout a new branch named 'gh-pages' started from <start_point> and with no parents
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // await execa("yarn", ["build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    // Stage all the files in the 'folderName'
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    // Commit all the staged files in 'folderName' with message 'gh-pages'
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    // Push local commit to origin branch 'gh-pages' overriding the restriction that, 
    // by default, 'git push' refuses to update a remote ref that is not an ancestor of the local ref
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    // Remove the files in the 'folderName' recursively
    await execa("rm", ["-r", folderName]);
    // Checkout the local branch 'master' ignored any unmerged entries
    await execa("git", ["checkout", "-f", "master"]);
    // Delete the local branch 'gh-pages'
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();