module.exports = {
  name: "help",
  alias: ["h", "menu"],
  desc: "List all command",
  category: "General",
  react: "✅",
  start: async (client, m, { commands, args, prefix, text, toUpper }) => {
    const { pushName, sender } = m;
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `*🍁Command :* ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`*👾Alias :* ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`*⏱️Cooldown:* ${cmd.cool}`);
      if (cmd.desc) data.push(`*🧾Description :* ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `*💡Example :* ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `*ℹ️Command Info*\n\n${data.join("\n")}`,
        footer: "*©Eternity-Team*",
        buttons: buttonss,
        headerType: 1,
      };
      return client.sendMessage(m.from, buth, { quoted: m });
    } else {
      const { pushName, sender } = m;
      let cm = commands.keys();
      let category = [];

      for (let cmd of cm) {
        let info = commands.get(cmd);
        if (!cmd) continue;
        if (!info.category || info.category === "private") continue;
        if (
          !info?.category ||
          (info.category === "Nsfw" && !nsfw.includes(m.from))
        )
          continue;
        if (Object.keys(category).includes(info.category))
          category[info.category].push(info);
        else {
          category[info.category] = [];
          category[info.category].push(info);
        }
      }
      if (!nsfw.includes(m.from)) {
        var emo = ["📖","🎉", "🍁", "🍀", "🌊", "🎵", "🎟", "♨️", "🉐"];
      } else {
        var emo = ["📖","🎉", "🍁", "🍀", "🌊", "🎵", "🔞", "🎟", "♨️", "🉐"];
      }
      let txt = `*Kon'nichiwa (｡♡‿♡｡)* ${pushName} Watashiwa *Nezuko*.
                       
🧧 *Prefix :* [ ${prefix} ]
                       
📝 Here's the *Commands* listed below :\n\n`;
     \x0a\x0a┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x20*THARU_X-𝗠𝗗\x20𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦\x20𝗟𝗜𝗦𝗧*\x20🚀\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x0a┌─(\x20🧩\x20*ᴅᴏᴡɴʟᴏᴀᴅᴇʀ\x20ᴄᴏᴍᴍᴀɴᴅꜱ*\x20)\x0a│>🔰\x20.song\x0a│>🔰\x20.video\x0a│>🔰\x20.apk\x0a│>🔰\x20.docsong\x20\x0a│>🔰\x20.docvideo\x0a│>🔰\x20.fb\x0a│>🔰\x20.tiktok\x0a│>🔰\x20.img\x0a│>🔰\x20.mp4down\x0a│>🔰\x20.fbs\x0a│┗━━━━━━━╾▫\x0a└───────────▫\x0a┌─(\x20🧩\x20*ꜱᴇᴀʀᴄʜ\x20ᴄᴏᴍᴍᴀɴᴅꜱ*\x20)\x0a│>🔰\x20.wabeta\x0a│>🔰\x20.findvideo\x0a│>🔰\x20.findsong\x0a│>🔰\x20.yts\x0a│>🔰\x20.weather\x0a│>🔰\x20.movie\x0a│┗━━━━━━━╾▫\x0a└───────────▫\x0a┌─(\x20🧩\x20*ᴄᴏɴᴠᴇʀᴛ\x20ᴄᴏᴍᴍᴀɴᴅꜱ*\x20)\x0a│>🔰\x20.sticker\x0a│>🔰\x20.attp\x0a│>🔰\x20.ttp\x0a│>🔰\x20.logo\x0a│>🔰\x20.ss\x0a│>🔰\x20.trt\x0a│┗━━━━━╾▫\x0a└─────────▫\x0a┌─(\x20🧩\x20*ɢʀᴏᴜᴘ\x20ᴄᴏᴍᴍᴀɴᴅꜱ*\x20)\x0a│>🔰\x20.kick\x0a│>🔰\x20.promote\x0a│>🔰\x20.demote\x0a│>🔰\x20.htg\x0a│>🔰\x20.setwelcome\x0a│>🔰\x20.setgoodbye\x0a│>🔰\x20.gs\x0a│>🔰\x20.ban\x0a│>🔰\x20.unban\x0a│>🔰\x20.ping\x0a│>🔰\x20.del\x0a│>🔰\x20.gdp\x0a│┗━━━━━━╾▫\x0a└─────────▫\x0a┌─(\x20🧩\x20\x20*ᴀᴅᴍɪɴ\x20ᴄᴏᴍᴍᴀɴᴅꜱ*\x20)\x0a│>🔰\x20.ujid\x0a│>🔰\x20.block\x0a│>🔰\x20.unblock\x0a│>🔰\x20.restart\x0a│>🔰\x20.join\x0a│>🔰\x20.save\x0a│>🔰\x20.get\x0a│>🔰\x20.dnote\x0a│>🔰\x20.dallnote\x0a│┗━━━━━━╾▫\x0a└─────────▫\x20\x20\x0a┌─(\x20🧩\x20*ɢᴀᴍᴇ\x20ᴄᴏᴍᴍᴀɴᴅꜱ*\x20)\x0a│>🔰\x20.xo\x0a│>🔰\x20.dadu\x0a│┗━━━━━╾▫\x0a└─────────▫\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a┌─(\x20🧩\x20*ᴏᴛʜᴇʀ\x20ᴄᴏᴍᴍᴀɴᴅꜱ*\x20)\x0a│>🔰\x20.alive\x0a│>🔰\x20.rank\x0a│>🔰\x20.profile\x0a│>🔰\x20.system\x0a│>🔰\x20.eval\x0a│>🔰\x20.qr\x0a│>🔰\x20.sn\x0a│┗━━━━━╾▫\x0a└─────────▫\x0a\x0a'
      }
      txt += `📗 Type *${prefix}help* <Command-Name> or <Command-Name> --info\n\n`;
      txt += `*©Eternity-Team*`
      const eternity = [
        "https://images3.alphacoders.com/107/1078895.png",
        "https://images6.alphacoders.com/103/1037400.png",
        "https://images6.alphacoders.com/102/1020806.jpg",
        "https://images7.alphacoders.com/104/1040192.jpg",
        "https://images5.alphacoders.com/104/1045349.jpg",
        "https://images6.alphacoders.com/102/1024472.png",
        "https://images8.alphacoders.com/120/1206401.jpg",
        "https://images8.alphacoders.com/122/1222661.png",
        "https://images3.alphacoders.com/120/1207252.jpg",
        "https://images2.alphacoders.com/125/1258571.jpg",
        "https://images7.alphacoders.com/125/1258568.jpg",
        "https://images2.alphacoders.com/125/1258571.jpg",
        "https://images2.alphacoders.com/125/1254189.jpg",
      ];
      const eternitylogo =
        eternity[Math.floor(Math.random() * eternity.length)];
      client.sendMessage(m.from, {image:{url:eternitylogo}, caption:txt}, { quoted: m });
    }
  },
};
