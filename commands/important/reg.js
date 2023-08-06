const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reg')
		.setDescription('registration embed'),
	async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('Register!')
      .setDescription('You need to register to access the server.')
      .setFooter({text:'Log in now!'})
    
		await interaction.reply({content: 'etst', ephemeral: true});
    const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Register now!')
			.setStyle(ButtonStyle.Primary);
    
    const row = new ActionRowBuilder()
			.addComponents(confirm);
    
    interaction.channel.send({content: '', embeds: [embed], components:[row]})
	},
};