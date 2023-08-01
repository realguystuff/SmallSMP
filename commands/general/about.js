const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('About me'),
	async execute(interaction) {
		await interaction.reply('I am a multipurpose bot made for the Small SMP Discord server and the Minecraft server. I help you manage your account here. What can I do for you?');
	},
};