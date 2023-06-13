module.exports = {
  name: "help",
  alias: ["h", "menu"],
  desc: "List all command",
  category: "General",
  react: "✅",
 
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
