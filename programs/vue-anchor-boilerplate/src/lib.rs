use anchor_lang::prelude::*;

declare_id!("ASTa2tZB6ghqSzNGz6FeZnhfsQHiPJxDxi1dT6p5cLFF");

#[program]
pub mod vue_anchor_boilerplate {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
