const fs = require("fs");
const path = require("path");

fs.readFile(
  path.resolve(__dirname, "./data/MAMUT_EXPORT.txt"),
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const lines = data.split("\n");
    const delimeter = ";";

    const result = [];

    for (let i = 0; i < lines.length; i++) {
      const row = lines[i].split(delimeter);

      result.push({
        identifikasjon: row[0],
        produktnummer: row[1],
        beskrivelse: row[2],
        pakkeenhet: row[3],
        vekt: row[4],
        volum: row[5],
        kostpris_eks_mva: row[6],
        salgspris_eks_mva: row[7],
        utgaaende_mva: row[8],
        produktgruppe: row[9],
        undergruppe: row[10],
        innkjopspris_eks_mva: row[11],
        leverandor_produktnummer: row[12],
        lagerbeholdning: row[13],
        standard_lager: row[14],
        inngaaende_mva: row[15],
        EAN_kode: row[16],
      });
    }
    fs.writeFile(
      path.resolve(__dirname, "./data/MAMUT_EXPORT.json"),
      JSON.stringify(result, null, 2),
      (err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
        }
      }
    );
  }
);
