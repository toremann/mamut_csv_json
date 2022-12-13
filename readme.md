## Convert data exported from Mamut in GBAP15 format.

This script will convert csv data exported from Mamut export/import to json.

Place exported txt file in data folder or set correct path.

http://help.mamut.com/no/mhelp/rtm/import_export/csv_formats/product_formats/gbap15.htm

| Beskrivelse | Kolonne-nr. | Kolonne i Excel | Maks. lengde | Kommentar |
| :---: | :---: | :---: | :---: | :---: | 
| Identifikasjon | 0 | A | 6 | Alltid lik: GBAP15 |
| Produktnummer | 1 | B | 50 | Tekst |
| Beskrivelse/navn | 2 | C | 60 | Tekst |
| Pakkeenhet | 3 | D | 20 | Tekst |
| Vekt | 4 | E | 10 | Numerisk (inntil 3 desimaler) |
| Volum | 5 | F | 10 | Numerisk (inntil 3 desimaler) |
| Kostpris (eks.mva.) | 6 | G | 10 | Numerisk (inntil 4 desimaler) |
| Salgspris (eks.mva.) | 7 | H | 10 | Numerisk (inntil 4 desimaler) |
| Utgående mva. | 8 | I | 5 | Numerisk (StdReg_xxx.xls) |
| Produktgruppe | 9 | J | 5 | Numerisk (StdReg_xxx.xls) |
| Undergruppe | 10 | K | 5 | Numerisk (StdReg_xxx.xls) |
| Innkjøpspris (eks. mva) | 11 | L | 15 | Numerisk (StdReg_xxx.xls) |
| Leverandørens produktnummer | 12 | M | 25 | Tekst (Se dokumentasjon) |
| Lagerbeholdning | 13 | N | 12 | Numerisk (inntil 2 desimaler) |
| Standard lager | 14 | O | 4 | Numerisk (StdReg_xxx.xls) Vanligvis 1 (Hovedlager) |
| Inngående mva. | 15 | P | 3 | Numerisk (StdReg_xxx.xls) |
| EAN kode | 16 | Q | 20 | Tekst

## Eksempel
```
GBAP15;131-11068;Zenerdiode BZX 79 C6V8  0,5W;1stk;0.000;0.000;0.3600;0.7200;353;33;0;0.3600;300-30-814;50.000;4;354;; 
```

# Konvertert til JSON

```
[
  {
    "identifikasjon": "GBAP15",
    "produktnummer": "131-11068",
    "beskrivelse": "Zenerdiode BZX 79 C6V8  0,5W",
    "pakkeenhet": "1stk",
    "vekt": "0.000",
    "volum": "0.000",
    "kostpris_eks_mva": "0.3600",
    "salgspris_eks_mva": "0.7200",
    "utgaaende_mva": "353",
    "produktgruppe": "33",
    "undergruppe": "0",
    "innkjopspris_eks_mva": "0.3600",
    "leverandor_produktnummer": "300-30-814",
    "lagerbeholdning": "50.000",
    "standard_lager": "4",
    "inngaaende_mva": "354",
    "EAN_kode": ""
  }
]
```