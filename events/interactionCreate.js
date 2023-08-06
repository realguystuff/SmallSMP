const { Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
  		const command = interaction.client.commands.get(interaction.commandName);
  
  		if (!command) {
  			console.error(`No command matching ${interaction.commandName} was found.`);
  			return;
  		}
  
  		try {
  			await command.execute(interaction);
  		} catch (error) {
  			console.error(`Error executing ${interaction.commandName}`);
  			console.error(error);
  		}
    } else if (interaction.isModalSubmit()) {
      if (interaction.customId === 'myModal') {
        const username = interaction.fields.getTextInputValue('username');
      	const password = interaction.fields.getTextInputValue('password');

        // TODO: add registration logic
      }
    } else if (interaction.isButton()) {
      console.log(interaction);
      // Create the modal
      const registration = new ModalBuilder()
        .setCustomId('registration')
        .setTitle('Registration');
  
      // Create the text input components
      const username = new TextInputBuilder()
        .setCustomId('username')
        .setLabel("Enter your Minecraft username below:")
        .setStyle(TextInputStyle.Short)
        .setPlaceholder('realguystuff')
        .setMinLength(4)
        .setMaxLength(16);

  		const password = new TextInputBuilder()
  			.setCustomId('password')
  			.setLabel("Create a password (please remember this!):")
  			.setStyle(TextInputStyle.Short)
        .setMinLength(8);
  
    	const first = new ActionRowBuilder().addComponents(username);
    	const second = new ActionRowBuilder().addComponents(password);

      registration.addComponents(first, second);
      await interaction.showModal(registration);
    }
	}
};