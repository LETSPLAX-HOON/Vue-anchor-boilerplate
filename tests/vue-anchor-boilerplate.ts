import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { VueAnchorBoilerplate } from "../target/types/vue_anchor_boilerplate";

describe("vue-anchor-boilerplate", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.VueAnchorBoilerplate as Program<VueAnchorBoilerplate>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
