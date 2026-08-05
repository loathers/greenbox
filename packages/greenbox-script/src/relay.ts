import { cliExecuteOutput, print, writeln } from "kolmafia";

export function main(): void {
  // Execute the greenbox script to generate the link
  const output = cliExecuteOutput("call greenbox.js");

  // Extract the greenbox link from the output
  const urlPattern = /<a href="([^"]+)">([^<]+)<\/a>/;
  const match = output.match(urlPattern);

  if (!match) {
    print(
      "Failed to generate greenbox link. Check your greenbox script.",
      "red",
    );
    return;
  }

  const greenboxUrl = match[1];
  writeln(
    `<html><head><meta http-equiv="refresh" content="0; url=${greenboxUrl}" /></head><body><p>Redirecting to Greenbox...</p><script>window.location.href = "${greenboxUrl}";</script></body></html>`,
  );
}
