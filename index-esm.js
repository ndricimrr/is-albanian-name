"use strict";

const list = [
  "Abaz",
  "Abdi",
  "Abdyl",
  "Abedin",
  "Abigela",
  "Abisa",
  "Ada",
  "Adanalda",
  "Adela",
  "Adelada",
  "Adelajda",
  "Adelin",
  "Adelina",
  "Adem",
  "Adenisa",
  "Adi",
  "Adil",
  "Adila",
  "Adiola",
  "Adisa",
  "Adivije",
  "Adja",
  "Admir",
  "Admira",
  "Adnan",
  "Adnand",
  "Adnant",
  "Adra",
  "Adri",
  "Adrian",
  "Adriana",
  "Adriano",
  "Adriatik",
  "Adham",
  "Aester",
  "Aferdita",
  "Afjoda",
  "Afrim",
  "Agabi",
  "Agathi",
  "Age",
  "Agelin",
  "Agenta",
  "Aggelos",
  "Agi",
  "Agim",
  "Agli",
  "Aglin",
  "Agneza",
  "Agron",
  "Agustin",
  "Agush",
  "Ahmet",
  "Aida",
  "Aina",
  "Aiola",
  "Aisa",
  "Ajdisa",
  "Ajet",
  "Ajga",
  "Ajkeda",
  "Ajla",
  "Ajorda",
  "Ajri",
  "Akela",
  "Akion",
  "Alba",
  "Alban",
  "Albana",
  "Albani",
  "Albano",
  "Albenc",
  "Alberd",
  "Albert",
  "Alberta",
  "Albertina",
  "Albesona",
  "Albi",
  "Albin",
  "Albina",
  "Albino",
  "Albiola",
  "Albion",
  "Albiona",
  "Albjon",
  "Alda",
  "Aldar",
  "Aldi",
  "Aldion",
  "Aldit",
  "Aldo",
  "Aldor",
  "Aldorjan",
  "Aldrin",
  "Aleandro",
  "Aleks",
  "Aleksa",
  "Aleksander",
  "Aleksandër",
  "Aleksandra",
  "Aleksia",
  "Alen",
  "Alena",
  "Alerda",
  "Alert",
  "Alesia",
  "Alesio",
  "Aleziana",
  "Alfina",
  "Alfiora",
  "Alfir",
  "Alfons",
  "Alfred",
  "Alfredo",
  "Alfrida",
  "Algert",
  "Algerta",
  "Ali",
  "Alida",
  "Aliena",
  "Aligert",
  "Alijan",
  "Alije",
  "Alika",
  "Alion",
  "Aliona",
  "Alisa",
  "Alisona",
  "Aljona",
  "Aljosha",
  "Alkea",
  "Alked",
  "Alken",
  "Alkesa",
  "Alket",
  "Alketa",
  "Alkida",
  "Alma",
  "Almir",
  "Almiva",
  "Alois",
  "Alondra",
  "Alqi",
  "Alsi",
  "Alsonja",
  "Altea",
  "Alti",
  "Altida",
  "Altier",
  "Altigon",
  "Altin",
  "Altiza",
  "Alvarita",
  "Alvaro",
  "Alverita",
  "Alvi",
  "Alvilda",
  "Amanda",
  "Amando",
  "Amant",
  "Amantia",
  "Amaraldo",
  "Amarda",
  "Amarilda",
  "Amarildo",
  "Ambel",
  "Ambra",
  "Amel",
  "Amela",
  "Amelda",
  "Ameljeta",
  "Amelo",
  "Ameralda",
  "Amerildo",
  "Amerindo",
  "Ami",
  "Amina",
  "Ana",
  "Anaida",
  "Anajada",
  "Anastas",
  "Anci",
  "Andeta",
  "Andi",
  "Andia",
  "Andiola",
  "Andis",
  "Andius",
  "Andja",
  "Andon",
  "Andona",
  "Andoneta",
  "Andonika",
  "Andrea",
  "Andrejeva",
  "Andri",
  "Andrin",
  "Andrit",
  "Andromeda",
  "Anduel",
  "Anduela",
  "Anduena",
  "Anela",
  "Anest",
  "Anesti",
  "Aneta",
  "Angela",
  "Angjelina",
  "Ani",
  "Anida",
  "Anila",
  "Anilda",
  "Anileda",
  "Aniledo",
  "Anis",
  "Anisa",
  "Anita",
  "Anoril",
  "Anri",
  "Ansel",
  "Ansela",
  "Antela",
  "Anteo",
  "Antigona",
  "Antigoni",
  "Antila",
  "Antiomi",
  "Anton",
  "Antonela",
  "Antonio",
  "Antuena",
  "Anxa",
  "Anxhela",
  "Anxhelika",
  "Anxhelina",
  "Anxheljan",
  "Anxhelo",
  "Anxhi",
  "Anzanida",
  "Anja",
  "Anjeza",
  "Apostol",
  "Aqif",
  "Aranit",
  "Arba",
  "Arban",
  "Arben",
  "Arber",
  "Arberesha",
  "Arbër",
  "Arbi",
  "Arbiana",
  "Arbias",
  "Arbiola",
  "Arbiona",
  "Arbjan",
  "Arbora",
  "Arbri",
  "Ardenis",
  "Ardi",
  "Ardian",
  "Ardiana",
  "Ardinela",
  "Ardiol",
  "Ardiola",
  "Ardis",
  "Ardit",
  "Ardita",
  "Ardjan",
  "Ardjana",
  "Arenc",
  "Arentina",
  "Areti",
  "Argent",
  "Argert",
  "Argita",
  "Argjela",
  "Ari",
  "Arian",
  "Ariana",
  "Ariel",
  "Ariela",
  "Arif",
  "Arikla",
  "Ariola",
  "Ariona",
  "Aris",
  "Aristela",
  "Aristidh",
  "Aristogen",
  "Aristoteli",
  "Arjan",
  "Arjana",
  "Arjel",
  "Arjela",
  "Arjet",
  "Arjeta",
  "Arjola",
  "Arjold",
  "Arjon",
  "Arjona",
  "Arjontino",
  "Arkad",
  "Arked",
  "Arkend",
  "Arkida",
  "Arklis",
  "Arkonada",
  "Arli",
  "Arlin",
  "Arlind",
  "Arlinda",
  "Arlindo",
  "Armalind",
  "Armand",
  "Armanda",
  "Armando",
  "Armela",
  "Armelinea",
  "Armena",
  "Armeneza",
  "Armida",
  "Armir",
  "Armisa",
  "Armond",
  "Armonda",
  "Arnela",
  "Arnil",
  "Arnis",
  "Arnold",
  "Arsa",
  "Arsela",
  "Arselinda",
  "Arsen",
  "Arsenida",
  "Arsid",
  "Arsida",
  "Arsinoi",
  "Arsiva",
  "Arshin",
  "Arta",
  "Artan",
  "Artana",
  "Artela",
  "Artemida",
  "Artemis",
  "Artemisa",
  "Arten",
  "Artenisa",
  "Artevis",
  "Arti",
  "Artil",
  "Artim",
  "Artin",
  "Artina",
  "Artiol",
  "Artiola",
  "Artitan",
  "Artjola",
  "Artjon",
  "Artjona",
  "Artoniljo",
  "Artur",
  "Arvena",
  "Arvenola",
  "Arvid",
  "Arvjola",
  "Arzana",
  "Asia",
  "Asimela",
  "Aspasi",
  "Aspasjana",
  "Asqeri",
  "Astian",
  "Astina",
  "Astrin",
  "Astrit",
  "Asuida",
  "Atena",
  "Atila",
  "Atilda",
  "Athinela",
  "Athinta",
  "Aulon",
  "Aulona",
  "Aurel",
  "Aurela",
  "Aurelio",
  "Aurena",
  "Auron",
  "Aurora",
  "Avdi",
  "Avdyl",
  "Avenir",
  "Avjerina",
  "Avni",
  "Azbije",
  "Azem",
  "Azmir",
  "Aznaida",
  "Baftjar",
  "Bajram",
  "Bakent",
  "Balla",
  "Bamelda",
  "Bani",
  "Bardh",
  "Bardha",
  "Bardhe",
  "Bardhi",
  "Bardhok",
  "Bardhosh",
  "Bardhyl",
  "Bari",
  "Barie",
  "Barjam",
  "Bashkim",
  "Bedrie",
  "Bedrije",
  "Behar",
  "Bekim",
  "Bela",
  "Belina",
  "Belinda",
  "Belindo",
  "Belisa",
  "Bena",
  "Benada",
  "Benard",
  "Benardo",
  "Benereta",
  "Beni",
  "Benisa",
  "Benon",
  "Bensar",
  "Benjamin",
  "Beri",
  "Berjana",
  "Berlin",
  "Bernard",
  "Bernarda",
  "Bert",
  "Berta",
  "Berti",
  "Bertil",
  "Bertilda",
  "Bertin",
  "Bertina",
  "Berton",
  "Besa",
  "Besar",
  "Besard",
  "Besarda",
  "Besarije",
  "Besart",
  "Besarta",
  "Besfort",
  "Besi",
  "Besian",
  "Besiana",
  "Besim",
  "Besiona",
  "Besjana",
  "Besjona",
  "Besmir",
  "Besmira",
  "Besnik",
  "Besnike",
  "Beso",
  "Betim",
  "Betina",
  "Bexhed",
  "Bexhet",
  "Biana",
  "Bianka",
  "Bibjana",
  "Bilal",
  "Bilbil",
  "Birena",
  "Bjoni",
  "Bjordi",
  "Bjorn",
  "Bjorni",
  "Bleard",
  "Bled",
  "Bledar",
  "Bledi",
  "Bledian",
  "Blediona",
  "Bledjan",
  "Blenard",
  "Blendi",
  "Bleona",
  "Blerando",
  "Blerant",
  "Bleri",
  "Blerim",
  "Blerina",
  "Blerta",
  "Bleta",
  "Bletina",
  "Bojken",
  "Bona",
  "Boni",
  "Bora",
  "Borano",
  "Bori",
  "Boriana",
  "Boris",
  "Born",
  "Brendon",
  "Bresilda",
  "Brian",
  "Brigen",
  "Brikel",
  "Brikena",
  "Briseida",
  "Brisejda",
  "Briselda",
  "Brisida",
  "Brisjana",
  "Brixhilda",
  "Brizita",
  "Brulind",
  "Brulinda",
  "Bruna",
  "Brunila",
  "Brunild",
  "Brunilda",
  "Brunist",
  "Bruno",
  "Brusilda",
  "Buba",
  "Bujana",
  "Bujar",
  "Bukri",
  "Bukurie",
  "Bukurije",
  "Bukurosh",
  "Bushi",
  "Caje",
  "Cajup",
  "Celesta",
  "Celnik",
  "Celsea",
  "Cercis",
  "Cezarel",
  "Christos",
  "Ciljeta",
  "Cimi",
  "Clirim",
  "Çeljeta",
  "Çelnik",
  "Çeti",
  "Çiljeta",
  "Çimi",
  "Dafina",
  "Dajan",
  "Dajana",
  "Daklea",
  "Daku",
  "Dalina",
  "Dalip",
  "Dalteo",
  "Dallandyshe",
  "Dallendyshe",
  "Damjan",
  "Daniel",
  "Daniela",
  "Danil",
  "Danja",
  "Danjel",
  "Danjela",
  "Dardan",
  "Dario",
  "Darjo",
  "Darla",
  "Darlina",
  "Dash",
  "Dashamir",
  "Dashmir",
  "Dashnor",
  "Dasho",
  "Dashuri",
  "Dashurie",
  "David",
  "Davida",
  "Davina",
  "Dea",
  "Deada",
  "Deana",
  "Deart",
  "Deas",
  "Debatik",
  "Debora",
  "Defrim",
  "Dejvi",
  "Dejvis",
  "Delina",
  "Delores",
  "Demir",
  "Demona",
  "Dena",
  "Denad",
  "Denada",
  "Denalda",
  "Denaldo",
  "Deni",
  "Denilson",
  "Deniona",
  "Denis",
  "Denisa",
  "Deniz",
  "Derand",
  "Dervish",
  "Desantila",
  "Desara",
  "Desart",
  "Desarta",
  "Desi",
  "Desian",
  "Desina",
  "Desiona",
  "Destan",
  "Deshira",
  "Detjon",
  "Detjona",
  "Devi",
  "Devis",
  "Dezdemona",
  "Dëfrim",
  "Diana",
  "Dianeta",
  "Dilaver",
  "Dilber",
  "Dile",
  "Dini",
  "Dino",
  "Dinjola",
  "Diola",
  "Dionis",
  "Dionisa",
  "Dionixhi",
  "Disilva",
  "Diti",
  "Dition",
  "Ditjon",
  "Ditmir",
  "Ditmira",
  "Dituri",
  "Diturie",
  "Djana",
  "Dodona",
  "Dolfi",
  "Doloreza",
  "Dolorida",
  "Domeniko",
  "Donada",
  "Donald",
  "Donalda",
  "Donaldo",
  "Donard",
  "Donatela",
  "Doni",
  "Donian",
  "Donika",
  "Donjeta",
  "Doralb",
  "Doreida",
  "Dorentina",
  "Dorezi",
  "Dori",
  "Dorian",
  "Doriana",
  "Dorida",
  "Dorilda",
  "Dorina",
  "Dorinel",
  "Dorinela",
  "Doris",
  "Dorjan",
  "Dorjana",
  "Dornela",
  "Drakuli",
  "Drelona",
  "Drenica",
  "Drilon",
  "Drilona",
  "Drinald",
  "Drini",
  "Driselda",
  "Drita",
  "Dritan",
  "Driten",
  "Dritero",
  "Dritjon",
  "Drivalda",
  "Dudie",
  "Dule",
  "Durim",
  "Dyjon",
  "Dylber",
  "Dylejman",
  "Dhimitraq",
  "Dhimitrulla",
  "Dhurata",
  "Eart",
  "Eberhard",
  "Eda",
  "Edel",
  "Eden",
  "Edesa",
  "Edër",
  "Edi",
  "Edina",
  "Edinjo",
  "Ediola",
  "Edis",
  "Edisa",
  "Edison",
  "Edisona",
  "Edita",
  "Edizhon",
  "Edjola",
  "Edjon",
  "Edlan",
  "Edli",
  "Edlir",
  "Edlira",
  "Edmarie",
  "Edmir",
  "Edmond",
  "Edmonda",
  "Edon",
  "Edona",
  "Edra",
  "Edri",
  "Edriketa",
  "Edrina",
  "Eduard",
  "Eduart",
  "Eduhina",
  "Eduin",
  "Eduina",
  "Edvin",
  "Efi",
  "Eftali",
  "Efteni",
  "Efterpi",
  "Eftiola",
  "Egert",
  "Egest",
  "Egesta",
  "Egi",
  "Egieva",
  "Egir",
  "Egla",
  "Eglantin",
  "Eglantina",
  "Egleta",
  "Egli",
  "Eglid",
  "Egreta",
  "Egzon",
  "Egzona",
  "Ejona",
  "Ekmena",
  "Eksena",
  "Ela",
  "Elca",
  "Elda",
  "Eldi",
  "Eldik",
  "Eldisa",
  "Eldisela",
  "Eldison",
  "Eldjan",
  "Eldrina",
  "Elefteria",
  "Elektra",
  "Elena",
  "Eleni",
  "Elez",
  "Elfrida",
  "Elgi",
  "Elgjeralda",
  "Elham",
  "Eli",
  "Elian",
  "Eliana",
  "Elianda",
  "Elida",
  "Elidjana",
  "Elidjon",
  "Elidjona",
  "Elidon",
  "Elidona",
  "Eligert",
  "Elinar",
  "Elinda",
  "Elio",
  "Eliodi",
  "Elion",
  "Eliona",
  "Eliont",
  "Elira",
  "Elis",
  "Elisa",
  "Elisabeta",
  "Elisara",
  "Elisava",
  "Elisgen",
  "Elisjen",
  "Elistina",
  "Elitjona",
  "Eliverta",
  "Eliza",
  "Elizabeta",
  "Eljan",
  "Eljo",
  "Eljon",
  "Eljona",
  "Elma",
  "Elmarinda",
  "Elmas",
  "Elmaz",
  "Elmelina",
  "Elmira",
  "Elona",
  "Elrinda",
  "Elsa",
  "Elsamed",
  "Elsard",
  "Elsi",
  "Elsid",
  "Elsida",
  "Elson",
  "Elsuida",
  "Elta",
  "Eltion",
  "Eltjani",
  "Eltjon",
  "Elton",
  "Elva",
  "Elvana",
  "Elvano",
  "Elvi",
  "Elvin",
  "Elvina",
  "Elvira",
  "Elvis",
  "Elvisa",
  "Elza",
  "Ema",
  "Emanuel",
  "Emanuela",
  "Emel",
  "Emelina",
  "Emerlinda",
  "Emi",
  "Emigerta",
  "Emil",
  "Emila",
  "Emilda",
  "Emilian",
  "Emiliano",
  "Emilio",
  "Emiljan",
  "Emiljana",
  "Emiljano",
  "Emin",
  "Emiriola",
  "Emirjan",
  "Emirjeta",
  "Emirjona",
  "Emirlanda",
  "Emona",
  "Emri",
  "Ena",
  "Enada",
  "Enajda",
  "Enald",
  "Enca",
  "Endeida",
  "Endi",
  "Endri",
  "Endrijeta",
  "Endrin",
  "Endrina",
  "Endrisa",
  "Endrit",
  "Endrita",
  "Endriti",
  "Enea",
  "Ened",
  "Eneda",
  "Enedi",
  "Eneida",
  "Enejd",
  "Enejda",
  "Enel",
  "Enelda",
  "Eneo",
  "Enera",
  "Enereida",
  "Enerida",
  "Eneriketa",
  "Enerjeta",
  "Englantina",
  "Engjell",
  "Engjellusha",
  "Engjellushe",
  "Eni",
  "Enida",
  "Enijada",
  "Enila",
  "Enilda",
  "Enio",
  "Enion",
  "Enis",
  "Enisa",
  "Enisjeda",
  "Enkela",
  "Enkeled",
  "Enkeleda",
  "Enkeleida",
  "Enkelejd",
  "Enkelejda",
  "Enkelejdi",
  "Enkelida",
  "Enki",
  "Enkinela",
  "Enkjol",
  "Eno",
  "Enri",
  "Enrieta",
  "Enrigerta",
  "Ensa",
  "Ensi",
  "Ensuida",
  "Entel",
  "Entela",
  "Enton",
  "Entuela",
  "Enuela",
  "Enver",
  "Enxhi",
  "Enjo",
  "Eqerem",
  "Era",
  "Eralb",
  "Eralba",
  "Erald",
  "Eralda",
  "Eraldi",
  "Eraldo",
  "Eranda",
  "Erandi",
  "Erando",
  "Erblin",
  "Erblind",
  "Erda",
  "Erdet",
  "Erdi",
  "Erdis",
  "Erdisa",
  "Erdison",
  "Erdit",
  "Erenik",
  "Erfan",
  "Ergent",
  "Erges",
  "Ergesa",
  "Ergest",
  "Ergesta",
  "Ergi",
  "Ergin",
  "Ergisa",
  "Ergit",
  "Ergita",
  "Ergys",
  "Eri",
  "Eriald",
  "Erian",
  "Eriando",
  "Eriberta",
  "Erida",
  "Eridion",
  "Eridjol",
  "Eridjola",
  "Eridjon",
  "Erido",
  "Erigels",
  "Erigers",
  "Erigert",
  "Eriglen",
  "Erigli",
  "Eriglisa",
  "Erikela",
  "Eriko",
  "Eriksen",
  "Erila",
  "Erild",
  "Erilda",
  "Erina",
  "Erind",
  "Erinda",
  "Erindi",
  "Erinolda",
  "Eriola",
  "Erion",
  "Eriona",
  "Eris",
  "Erisa",
  "Eriselda",
  "Erisild",
  "Erisilda",
  "Erisjon",
  "Eriton",
  "Erjald",
  "Erjalda",
  "Erjeta",
  "Erjo",
  "Erjol",
  "Erjola",
  "Erjolta",
  "Erjon",
  "Erjona",
  "Erjonida",
  "Erjus",
  "Erkida",
  "Erland",
  "Erlando",
  "Erleda",
  "Erleta",
  "Erli",
  "Erlin",
  "Erlind",
  "Erlinda",
  "Erlint",
  "Erlion",
  "Erlis",
  "Erlona",
  "Erma",
  "Ermal",
  "Ermalda",
  "Ermanda",
  "Ermela",
  "Ermelinda",
  "Ermelis",
  "Ermerita",
  "Ermir",
  "Ermira",
  "Ermonela",
  "Erneleva",
  "Ernes",
  "Ernest",
  "Ernik",
  "Ernilda",
  "Ernirdi",
  "Ernisa",
  "Erolda",
  "Erona",
  "Ersel",
  "Ersi",
  "Ersida",
  "Ersilda",
  "Ersion",
  "Ersjano",
  "Erson",
  "Erta",
  "Erti",
  "Ertigel",
  "Ertil",
  "Ertila",
  "Ertis",
  "Ertjola",
  "Ertogel",
  "Ervaldo",
  "Ervin",
  "Ervina",
  "Ervis",
  "Ervisa",
  "Ervison",
  "Ervist",
  "Ervola",
  "Erzen",
  "Esat",
  "Eselena",
  "Esi",
  "Esila",
  "Esion",
  "Esjona",
  "Esli",
  "Esmeralda",
  "Esmeranda",
  "Esmerilda",
  "Estela",
  "Ester",
  "Esteri",
  "Esterina",
  "Estref",
  "Estri",
  "Etelinda",
  "Etien",
  "Etila",
  "Etilda",
  "Etjen",
  "Etleva",
  "Etlind",
  "Etlira",
  "Etmond",
  "Etrit",
  "Etvin",
  "Etvina",
  "Ethem",
  "Eueda",
  "Eugen",
  "Eugenia",
  "Eugert",
  "Eugest",
  "Eurel",
  "Euxhenio",
  "Eva",
  "Evans",
  "Evarest",
  "Evarist",
  "Evelina",
  "Everalda",
  "Everaldo",
  "Everes",
  "Everest",
  "Evgjeni",
  "Evigjen",
  "Evin",
  "Evionda",
  "Evis",
  "Evisa",
  "Evjan",
  "Evjenia",
  "Evlinda",
  "Fabian",
  "Fabiana",
  "Fabiano",
  "Fabio",
  "Fabiola",
  "Fabjana",
  "Fabjola",
  "Fabjon",
  "Fadil",
  "Faik",
  "Fanerion",
  "Fani",
  "Faola",
  "Farida",
  "Farie",
  "Fasli",
  "Fatbardh",
  "Fatbardha",
  "Fation",
  "Fationa",
  "Fatjet",
  "Fatjo",
  "Fatjon",
  "Fatjona",
  "Fatlli",
  "Fatma",
  "Fatmir",
  "Fatmira",
  "Fatos",
  "Fatri",
  "Fedra",
  "Felek",
  "Felicjano",
  "Feliks",
  "Felisja",
  "Ferda",
  "Ferdinand",
  "Ferdinant",
  "Feride",
  "Feridun",
  "Ferik",
  "Ferit",
  "Feruz",
  "Ferrik",
  "Festim",
  "Festiona",
  "Feta",
  "Fetah",
  "Fidela",
  "Fiena",
  "Fieri",
  "Filip",
  "Fiodor",
  "Fioralba",
  "Fioralda",
  "Fiordi",
  "Fiorela",
  "Fiqiri",
  "Firdeus",
  "Firdus",
  "Fisnik",
  "Fisnike",
  "Fitim",
  "Fizjola",
  "Fjoalda",
  "Fjona",
  "Fjoralba",
  "Fjorel",
  "Fjorela",
  "Fjoren",
  "Fjorentin",
  "Fjorentina",
  "Fjorina",
  "Flabio",
  "Flamur",
  "Flaura",
  "Flavia",
  "Flavio",
  "Flavjo",
  "Flogert",
  "Flogerta",
  "Flor",
  "Flora",
  "Florand",
  "Florenc",
  "Florenca",
  "Florens",
  "Flores",
  "Floresha",
  "Floreta",
  "Florgert",
  "Flori",
  "Floriada",
  "Florian",
  "Floriana",
  "Florid",
  "Florijan",
  "Florije",
  "Florika",
  "Florilda",
  "Florina",
  "Florind",
  "Florinda",
  "Florion",
  "Florjan",
  "Florjana",
  "Florjon",
  "Fluisa",
  "Flutra",
  "Flutur",
  "Flutura",
  "Fluturim",
  "Flladi",
  "Fonsi",
  "Fortesa",
  "Fotaq",
  "Foti",
  "Fotini",
  "Fotion",
  "Fradiol",
  "Fran",
  "Franc",
  "Franceska",
  "Francesko",
  "Franci",
  "Françeska",
  "Françesko",
  "Franga",
  "Frankela",
  "Franko",
  "Franteza",
  "Fred",
  "Fredi",
  "Frenk",
  "Frensis",
  "Fresilda",
  "Freskida",
  "Frida",
  "Fridi",
  "Frisjola",
  "Frosajd",
  "Frosina",
  "Furtun",
  "Gabriela",
  "Gaetano",
  "Gani",
  "Gano",
  "Ganja",
  "Garufo",
  "Gasper",
  "Gazi",
  "Gazmen",
  "Gazmend",
  "Gazmir",
  "Gejzi",
  "Gela",
  "Gena",
  "Genc",
  "Genci",
  "Geni",
  "Genta",
  "Genti",
  "Gentian",
  "Gentiana",
  "Gentjan",
  "Gentjana",
  "Gentonela",
  "Gerala",
  "Gerald",
  "Geraldina",
  "Geraldo",
  "Gerardo",
  "Gerd",
  "Gerdi",
  "Gerhard",
  "Geri",
  "Gerilda",
  "Gerina",
  "Geron",
  "Gerond",
  "Gersi",
  "Gersian",
  "Gersjan",
  "Gerson",
  "Gert",
  "Gerta",
  "Gerti",
  "Gertila",
  "Gertjan",
  "Gesa",
  "Gesjana",
  "Gesterian",
  "Gesti",
  "Gezim",
  "Gëzim",
  "Gilardjano",
  "Gilberta",
  "Gilda",
  "Gisa",
  "Gisi",
  "Gladiola",
  "Gledia",
  "Gledian",
  "Gledis",
  "Gledisa",
  "Gledjon",
  "Glein",
  "Glen",
  "Gligor",
  "Glindxhet",
  "Gloria",
  "Godjan",
  "Goninda",
  "Gracian",
  "Graciela",
  "Gramos",
  "Gramoz",
  "Granit",
  "Grei",
  "Greis",
  "Grejsi",
  "Gresa",
  "Gresiana",
  "Greta",
  "Grigor",
  "Grigorin",
  "Grisel",
  "Griselda",
  "Grisilda",
  "Guido",
  "Guri",
  "Gzim",
  "Gjelosh",
  "Gjergj",
  "Gjergji",
  "Gjerovica",
  "Gjirina",
  "Gjiriti",
  "Gjok",
  "Gjolek",
  "Gjon",
  "Gjonka",
  "Gjovailn",
  "Gjovalin",
  "Gjuri",
  "Hajdar",
  "Hajdi",
  "Hajredin",
  "Hajri",
  "Hajrije",
  "Halim",
  "Halit",
  "Hamid",
  "Hamide",
  "Hamit",
  "Hanke",
  "Hansi",
  "Hantin",
  "Harald",
  "Harallamb",
  "Harisa",
  "Harmand",
  "Hasan",
  "Hatixhe",
  "Haxhi",
  "Hazbie",
  "Haziz",
  "Heglion",
  "Heklantina",
  "Hektor",
  "Hekuran",
  "Hekurie",
  "Helena",
  "Helga",
  "Henis",
  "Henkel",
  "Henri",
  "Henrik",
  "Henril",
  "Henris",
  "Hergi",
  "Herion",
  "Herkul",
  "Hermalda",
  "Hermes",
  "Hermiona",
  "Hermon",
  "Hernis",
  "Herta",
  "Hervina",
  "Hevio",
  "Hike",
  "Hilendi",
  "Hipokrat",
  "Hodo",
  "Holta",
  "Holtjana",
  "Hoxha",
  "Hristina",
  "Hristo",
  "Hubert",
  "Hydajet",
  "Hygerta",
  "Hyrisha",
  "Hysa",
  "Hysen",
  "Hysni",
  "Iblo",
  "Ibrahim",
  "Ida",
  "Idajet",
  "Iden",
  "Idi",
  "Idlir",
  "Igins",
  "Iglant",
  "Igli",
  "Ike",
  "Ilda",
  "Ildo",
  "Ilia",
  "Ilias",
  "Ilir",
  "Ilira",
  "Ilirian",
  "Iliriana",
  "Ilirjan",
  "Ilirjana",
  "Iljan",
  "Iljas",
  "Iljaz",
  "Ilma",
  "Ilmi",
  "Iluina",
  "Ilva",
  "Ilvana",
  "Ilxhejsa",
  "Imelda",
  "Imer",
  "Imirjon",
  "Inagljan",
  "Indri",
  "Indrit",
  "Indrita",
  "Inelda",
  "Ines",
  "Ingrid",
  "Ingrita",
  "Ingtao",
  "Ini",
  "Inis",
  "Ira",
  "Irakli",
  "Irald",
  "Iralda",
  "Irda",
  "Irdi",
  "Irena",
  "Irgen",
  "Irida",
  "Irilda",
  "Irina",
  "Irini",
  "Iris",
  "Irisa",
  "Irisi",
  "Irland",
  "Irlind",
  "Irma",
  "Irvis",
  "Isa",
  "Isabela",
  "Isi",
  "Isida",
  "Isilda",
  "Islam",
  "Isli",
  "Ismail",
  "Ismet",
  "Isnalda",
  "Istela",
  "Istref",
  "Iva",
  "Ivana",
  "Iven",
  "Ivo",
  "Ivona",
  "Izabela",
  "Izeir",
  "Izet",
  "Jaçe",
  "Jake",
  "Jalldyz",
  "Jamarber",
  "Jani",
  "Jari",
  "Jasmena",
  "Jehona",
  "Jelsona",
  "Jemin",
  "Jerina",
  "Jesmina",
  "Jeta",
  "Jetlira",
  "Jetmir",
  "Jetmira",
  "Jetnor",
  "Jetnora",
  "Jeton",
  "Jetvin",
  "Jeugert",
  "Joan",
  "Joana",
  "Joanci",
  "Joer",
  "Johan",
  "Jola",
  "Jolanda",
  "Joldi",
  "Joli",
  "Jolka",
  "Jona",
  "Jonad",
  "Jonada",
  "Jonalda",
  "Jonaldo",
  "Jonathan",
  "Jonela",
  "Jonerta",
  "Jones",
  "Joni",
  "Joniada",
  "Jonian",
  "Jonid",
  "Jonida",
  "Jonik",
  "Jonila",
  "Jonilda",
  "Jonis",
  "Jordi",
  "Jorelis",
  "Jorgitis",
  "Jorgo",
  "Jorgji",
  "Jorgjia",
  "Jori",
  "Jorida",
  "Jorin",
  "Jorina",
  "Jorind",
  "Jorjela",
  "Jornela",
  "Josela",
  "Josi",
  "Josif",
  "Josilda",
  "Jotilda",
  "Jovan",
  "Jozefina",
  "Juana",
  "Juela",
  "Juena",
  "Jugen",
  "Juli",
  "Julian",
  "Juliana",
  "Julika",
  "Julind",
  "Juljan",
  "Juljana",
  "Jultjan",
  "Juna",
  "Junald",
  "Juni",
  "Junid",
  "Jurgel",
  "Jurgen",
  "Juri",
  "Juridon",
  "Jusra",
  "Jusuf",
  "Juxhin",
  "Juxhina",
  "Kaci",
  "Kadife",
  "Kadri",
  "Kaliopi",
  "Kaltri",
  "Kamela",
  "Kamelis",
  "Kami",
  "Kamila",
  "Karafil",
  "Karolina",
  "Kasandra",
  "Kastriot",
  "Katerina",
  "Katina",
  "Keida",
  "Kejda",
  "Kejdi",
  "Kejsi",
  "Kejsila",
  "Kejti",
  "Kejvi",
  "Kela",
  "Keldi",
  "Keli",
  "Kelmend",
  "Kelment",
  "Kelsi",
  "Kelvi",
  "Kelvin",
  "Kena",
  "Kenisa",
  "Kenvila",
  "Kesiana",
  "Keti",
  "Ketiana",
  "Ketjona",
  "Ketrin",
  "Kevin",
  "Kianta",
  "Kilden",
  "Kirsti",
  "Klaidi",
  "Klajd",
  "Klajda",
  "Klajdi",
  "Klajdjola",
  "Klandi",
  "Klara",
  "Klarens",
  "Klarida",
  "Klarisa",
  "Klarita",
  "Klarsen",
  "Klaudeta",
  "Klaudia",
  "Klaudian",
  "Klaudio",
  "Klaudja",
  "Klaudjana",
  "Klaudjo",
  "Klaus",
  "Klavi",
  "Klea",
  "Kleana",
  "Kleant",
  "Kleanti",
  "Kleanth",
  "Kleanthica",
  "Kleart",
  "Kledi",
  "Kledia",
  "Kledian",
  "Kledina",
  "Kledis",
  "Kledisa",
  "Kledja",
  "Klei",
  "Kleidja",
  "Kleiton",
  "Klejda",
  "Klejdi",
  "Klejdia",
  "Klejsi",
  "Klejvi",
  "Klement",
  "Klementina",
  "Klen",
  "Klenti",
  "Kleo",
  "Kleona",
  "Klerida",
  "Klesi",
  "Klesia",
  "Klesta",
  "Klesti",
  "Kletjon",
  "Klevantin",
  "Klevi",
  "Klevin",
  "Klevis",
  "Klevisa",
  "Klidjana",
  "Klinton",
  "Klirjan",
  "Klisjana",
  "Klisman",
  "Kliti",
  "Klitjon",
  "Kliton",
  "Klod",
  "Klodi",
  "Klodian",
  "Klodiana",
  "Klodisona",
  "Klodjan",
  "Klodjana",
  "Klodoaldo",
  "Klotida",
  "Klotilda",
  "Koco",
  "Kodi",
  "Kole",
  "Koli",
  "Kolin",
  "Koperim",
  "Korab",
  "Korado",
  "Kostalda",
  "Kostanca",
  "Kostandin",
  "Kostando",
  "Kostika",
  "Kozeta",
  "Kozma",
  "Krenar",
  "Kreshnik",
  "Kridens",
  "Kris",
  "Krisel",
  "Krisela",
  "Kriselda",
  "Krisi",
  "Krisli",
  "Krist",
  "Krista",
  "Kristaq",
  "Kristela",
  "Kristen",
  "Kristi",
  "Kristian",
  "Kristiana",
  "Kristiano",
  "Kristina",
  "Kristjan",
  "Kristjana",
  "Kristjela",
  "Kristo",
  "Kristofor",
  "Krishnik",
  "Kritjon",
  "Ksanthipi",
  "Kudret",
  "Kujtim",
  "Kurt",
  "Kushullë",
  "Labinot",
  "Ladi",
  "Ladimir",
  "Ladjola",
  "Laert",
  "Lajdi",
  "Lamjon",
  "Lana",
  "Landi",
  "Larisa",
  "Latif",
  "Laura",
  "Laurena",
  "Laurent",
  "Laureta",
  "Lavdie",
  "Lavdije",
  "Lavdim",
  "Lavdimir",
  "Lavdisa",
  "Lavdosh",
  "Lavdrim",
  "Leandro",
  "Leda",
  "Ledi",
  "Ledia",
  "Ledian",
  "Lediana",
  "Ledio",
  "Ledion",
  "Lediona",
  "Ledionis",
  "Ledis",
  "Ledja",
  "Ledjan",
  "Ledjana",
  "Ledjo",
  "Ledjon",
  "Ledjona",
  "Ledrin",
  "Lefkothe",
  "Lefter",
  "Lefteri",
  "Lefterije",
  "Lejdi",
  "Lejdina",
  "Lejla",
  "Lejli",
  "Lelo",
  "Lena",
  "Leniza",
  "Lenka",
  "Leo",
  "Leon",
  "Leonard",
  "Leonela",
  "Leonida",
  "Leonora",
  "Lertin",
  "Leta",
  "Leunida",
  "Levita",
  "Liburni",
  "Lida",
  "Lidja",
  "Lidjan",
  "Ligor",
  "Lika",
  "Like",
  "Lila",
  "Lili",
  "Liliana",
  "Liljana",
  "Liman",
  "Limonera",
  "Lina",
  "Linda",
  "Lindita",
  "Lindja",
  "Lindjana",
  "Linjada",
  "Lion",
  "Liri",
  "Liridon",
  "Liridona",
  "Lirije",
  "Lisander",
  "Lisi",
  "Lision",
  "Lisjan",
  "Lisjola",
  "Lisjona",
  "Liti",
  "Litian",
  "Livia",
  "Livja",
  "Lizeta",
  "Lodovik",
  "Loina",
  "Loiza",
  "Lola",
  "Lona",
  "Loran",
  "Loranda",
  "Loredan",
  "Loredja",
  "Lorela",
  "Lorena",
  "Lorenc",
  "Lorent",
  "Loreta",
  "Lori",
  "Lorida",
  "Loris",
  "Lorjana",
  "Losha",
  "Lozjan",
  "Luan",
  "Lubiana",
  "Lubjana",
  "Luci",
  "Luciano",
  "Ludiano",
  "Ludina",
  "Ludjana",
  "Ludovik",
  "Luelza",
  "Luena",
  "Luftar",
  "Luida",
  "Luis",
  "Luisa",
  "Luiza",
  "Lulezim",
  "Luli",
  "Lulieta",
  "Lulijeta",
  "Luljeta",
  "Lulzim",
  "Lumturi",
  "Lumturie",
  "Lumturije",
  "Luneda",
  "Lura",
  "Lurjand",
  "Lushe",
  "Lutfi",
  "Lutfie",
  "Lyeda",
  "Llambi",
  "Llazar",
  "Lleshi",
  "Magdalena",
  "Mageliana",
  "Magi",
  "Mahmudije",
  "Majda",
  "Majkell",
  "Majli",
  "Majlinda",
  "Makelian",
  "Maksi",
  "Maksim",
  "Malbora",
  "Maldin",
  "Maldino",
  "Maliena",
  "Maliq",
  "Malorjana",
  "Maltin",
  "Malvin",
  "Malvina",
  "Mamica",
  "Mand",
  "Mandi",
  "Manuela",
  "Manjol",
  "Manjola",
  "Mara",
  "Marcela",
  "Mardi",
  "Marenglen",
  "Margarita",
  "Margena",
  "Margit",
  "Maria",
  "Marian",
  "Marie",
  "Mariel",
  "Marien",
  "Marieta",
  "Mariglen",
  "Mariglena",
  "Marije",
  "Marilda",
  "Marildo",
  "Marinela",
  "Marineo",
  "Maringlen",
  "Mario",
  "Mariola",
  "Marisa",
  "Marius",
  "Mariza",
  "Marjan",
  "Marjana",
  "Marjano",
  "Marjeta",
  "Marjol",
  "Marjola",
  "Marjon",
  "Marjona",
  "Marjus",
  "Mark",
  "Markel",
  "Markela",
  "Markelian",
  "Markeljan",
  "Markeljana",
  "Markens",
  "Marko",
  "Markos",
  "Marku",
  "Marlena",
  "Marlon",
  "Marseda",
  "Marsel",
  "Marsela",
  "Marsi",
  "Marsid",
  "Marsida",
  "Marsilda",
  "Marsildo",
  "Martin",
  "Martina",
  "Marvin",
  "Matea",
  "Mateo",
  "Mateos",
  "Mateus",
  "Matilda",
  "Maura",
  "Mbaresa",
  "Mbrelda",
  "Mea",
  "Mecan",
  "Medi",
  "Mediha",
  "Medina",
  "Medion",
  "Megan",
  "Megi",
  "Megli",
  "Mehdi",
  "Mehmet",
  "Meixhi",
  "Meklaudio",
  "Mela",
  "Melani",
  "Meli",
  "Meliha",
  "Melisa",
  "Melpomeni",
  "Melsi",
  "Menduf",
  "Menelao",
  "Meno",
  "Mentor",
  "Meri",
  "Meridjan",
  "Merilda",
  "Merin",
  "Meris",
  "Merita",
  "Meritan",
  "Mersida",
  "Mersin",
  "Merushe",
  "Mervin",
  "Mestan",
  "Mestjona",
  "Meti",
  "Metin",
  "Metjana",
  "Metush",
  "Mevlan",
  "Mevlud",
  "Mexhit",
  "Mezin",
  "Michela",
  "Migel",
  "Migela",
  "Migelino",
  "Migen",
  "Migena",
  "Migerta",
  "Mihal",
  "Mihallaq",
  "Mikael",
  "Mikaela",
  "Mikel",
  "Mikela",
  "Mikelis",
  "Miklovan",
  "Milaim",
  "Milen",
  "Milena",
  "Mili",
  "Milita",
  "Militan",
  "Miljan",
  "Miltion",
  "Milto",
  "Millanka",
  "Mimi",
  "Mimoza",
  "Mina",
  "Mirald",
  "Miranda",
  "Mirarber",
  "Mirban",
  "Mirea",
  "Mired",
  "Mirel",
  "Mirela",
  "Mirena",
  "Mirgen",
  "Miri",
  "Mirjan",
  "Mirjana",
  "Mirjet",
  "Mirjeta",
  "Mirjonda",
  "Mirka",
  "Mirlinda",
  "Mirsa",
  "Mirsad",
  "Mirsel",
  "Mirsida",
  "Mirush",
  "Mirvjena",
  "Misar",
  "Mishel",
  "Mitat",
  "Miti",
  "Mitiol",
  "Mitjon",
  "Mojsi",
  "Moku",
  "Monda",
  "Mondi",
  "Monika",
  "Morava",
  "Morin",
  "Moris",
  "Moza",
  "Muaharrem",
  "Muarrem",
  "Muca",
  "Muhamet",
  "Muharrem",
  "Murat",
  "Musa",
  "Mustafa",
  "Mynyr",
  "Myrto",
  "Myslim",
  "Mystehak",
  "Nada",
  "Nadi",
  "Nadia",
  "Nadir",
  "Nafshika",
  "Naim",
  "Najada",
  "Najdi",
  "Naku",
  "Napolon",
  "Nardi",
  "Narenta",
  "Naria",
  "Nasip",
  "Natasha",
  "Nausika",
  "Nazif",
  "Nazim",
  "Nazir",
  "Nazmi",
  "Nazmie",
  "Nazmije",
  "Nazmiola",
  "Nazo",
  "Ndrec",
  "Ndricim",
  "Ndriçim",
  "Nead",
  "Neandrit",
  "Neisa",
  "Neki",
  "Neli",
  "Nelsi",
  "Nelson",
  "Nensi",
  "Nereida",
  "Neri",
  "Neriban",
  "Neridion",
  "Nerita",
  "Neritan",
  "Nerta",
  "Nertela",
  "Nertil",
  "Nesilda",
  "Nesiol",
  "Nesti",
  "Nestor",
  "Neva",
  "Nevila",
  "Nevina",
  "Nevis",
  "Nevjon",
  "Nexhat",
  "Nexhi",
  "Nexhip",
  "Nexhmie",
  "Nexhmije",
  "Nezir",
  "Nik",
  "Nikida",
  "Niko",
  "Nikola",
  "Nikoleta",
  "Nikolin",
  "Nikolina",
  "Nikolla",
  "Niku",
  "Nila",
  "Nils",
  "Nimarjo",
  "Nimet",
  "Nimfa",
  "Nina",
  "Nineta",
  "Nino",
  "Nitjola",
  "Noce",
  "Nola",
  "Nora",
  "Noris",
  "Noriselda",
  "Nuci",
  "Nuredin",
  "Nuri",
  "Nurie",
  "Nurije",
  "Nushe",
  "Njazi",
  "Obsidon",
  "Odeta",
  "Odisela",
  "Oerda",
  "Ogerta",
  "Ola",
  "Oldi",
  "Olger",
  "Olgerd",
  "Olgert",
  "Olgerta",
  "Oli",
  "Olia",
  "Oligert",
  "Oligerta",
  "Olimbi",
  "Olimbia",
  "Olisa",
  "Oljada",
  "Oljan",
  "Oljesa",
  "Olsa",
  "Olsi",
  "Olsiana",
  "Olsjan",
  "Olta",
  "Olti",
  "Oltion",
  "Oltiona",
  "Oltjan",
  "Oltjon",
  "Omeri",
  "Ona",
  "Onaldo",
  "Oneda",
  "Onela",
  "Orald",
  "Orest",
  "Orgerta",
  "Orges",
  "Orgesa",
  "Orgesi",
  "Orgest",
  "Orgesta",
  "Orgeta",
  "Orhanani",
  "Ori",
  "Oriada",
  "Orial",
  "Orida",
  "Orieta",
  "Origest",
  "Oriol",
  "Oriola",
  "Orion",
  "Orjeta",
  "Orjola",
  "Orjon",
  "Orkida",
  "Ornel",
  "Ornela",
  "Ornildi",
  "Orsela",
  "Orsid",
  "Orsjola",
  "Ortenca",
  "Ortensia",
  "Ortjon",
  "Osiana",
  "Osman",
  "Osvi",
  "Pajtim",
  "Palion",
  "Pamela",
  "Pandeli",
  "Pando",
  "Pandora",
  "Pandush",
  "Pano",
  "Paola",
  "Parashqevi",
  "Parid",
  "Paridjona",
  "Pasha",
  "Pashk",
  "Pashke",
  "Pashko",
  "Pasho",
  "Patrizia",
  "Paula",
  "Paulin",
  "Paulina",
  "Paulo",
  "Pavjola",
  "Pavli",
  "Pavlin",
  "Pavlina",
  "Pegi",
  "Pegijana",
  "Pellumb",
  "Pellumbesha",
  "Perian",
  "Perjana",
  "Perparim",
  "Pertefe",
  "Petraq",
  "Petrika",
  "Petrina",
  "Petrit",
  "Petro",
  "Piro",
  "Pirro",
  "Pjereta",
  "Pjerin",
  "Pjeter",
  "Plarent",
  "Plator",
  "Polikseni",
  "Polizoi",
  "Pranvera",
  "Prementina",
  "Premtik",
  "Prenda",
  "Prenga",
  "Prishila",
  "Proletar",
  "Puhiza",
  "Qamil",
  "Qamile",
  "Qani",
  "Qatip",
  "Qazim",
  "Qemal",
  "Qeriba",
  "Qerim",
  "Qezar",
  "Raens",
  "Rafa",
  "Rafael",
  "Rafaela",
  "Rafaelo",
  "Rahim",
  "Raimonda",
  "Raisa",
  "Raisdora",
  "Rajisa",
  "Rajmond",
  "Rajmonda",
  "Rajna",
  "Rakel",
  "Rakela",
  "Rakip",
  "Rako",
  "Rald",
  "Ram",
  "Rama",
  "Ramadan",
  "Ramazan",
  "Ramion",
  "Ramir",
  "Ramis",
  "Ramiz",
  "Ranald",
  "Randi",
  "Rando",
  "Raniela",
  "Raqi",
  "Rasim",
  "Ravesa",
  "Raviola",
  "Ravjola",
  "Razie",
  "Rea",
  "Reada",
  "Realda",
  "Realdo",
  "Rebeka",
  "Redeta",
  "Redi",
  "Redian",
  "Redilian",
  "Redina",
  "Redinela",
  "Redion",
  "Redjan",
  "Redjana",
  "Redjola",
  "Redon",
  "Redona",
  "Refat",
  "Refik",
  "Refiola",
  "Refit",
  "Rega",
  "Regina",
  "Regont",
  "Rehana",
  "Rei",
  "Reidi",
  "Reinaldo",
  "Rejnada",
  "Remida",
  "Remilda",
  "Renald",
  "Renalda",
  "Renaldo",
  "Renard",
  "Renata",
  "Renato",
  "Renis",
  "Renisa",
  "Reniss",
  "Renuar",
  "Republika",
  "Resida",
  "Resmi",
  "Resmije",
  "Resul",
  "Reshat",
  "Reti",
  "Rexhep",
  "Rexhina",
  "Rexhino",
  "Rezart",
  "Rezarta",
  "Rezeart",
  "Rezearta",
  "Rezi",
  "Ridi",
  "Ridvan",
  "Rigels",
  "Rigelsa",
  "Rigelta",
  "Rigen",
  "Rigers",
  "Rigert",
  "Rigerta",
  "Rigest",
  "Rigi",
  "Rigus",
  "Rikard",
  "Riku",
  "Rilinda",
  "Rimi",
  "Rina",
  "Rinada",
  "Rinaldo",
  "Rinisa",
  "Rionela",
  "Risela",
  "Riselda",
  "Risi",
  "Risilda",
  "Rita",
  "Ritvan",
  "Ritvana",
  "Rixhild",
  "Riza",
  "Roana",
  "Robert",
  "Roberta",
  "Rodenc",
  "Rodiona",
  "Roland",
  "Rolanda",
  "Rolandi",
  "Romalda",
  "Romaldo",
  "Romeo",
  "Romi",
  "Romilda",
  "Romina",
  "Romino",
  "Ron",
  "Ronaldo",
  "Ronela",
  "Roneldi",
  "Ronida",
  "Roshi",
  "Rovena",
  "Roventa",
  "Roxhens",
  "Roza",
  "Rozafa",
  "Rozafat",
  "Rozana",
  "Rozart",
  "Rozela",
  "Rozeta",
  "Rozina",
  "Rozita",
  "Ruanda",
  "Rubin",
  "Rubina",
  "Ruci",
  "Rudi",
  "Rudin",
  "Rudina",
  "Ruhnilda",
  "Rustem",
  "Rushan",
  "Ruzhdi",
  "Ruzhdie",
  "Rrapo",
  "Rrapush",
  "Rrema",
  "Rrok",
  "Rrustem",
  "Sabi",
  "Sabiena",
  "Sabina",
  "Sabion",
  "Sabri",
  "Sabrina",
  "Sadet",
  "Sadi",
  "Sadika",
  "Sadjon",
  "Safo",
  "Said",
  "Saimir",
  "Saimira",
  "Sajmir",
  "Sajmira",
  "Sali",
  "Salihe",
  "Saljon",
  "Salo",
  "Samanta",
  "Samed",
  "Samela",
  "Sami",
  "Samidije",
  "Samuel",
  "Samuela",
  "Sander",
  "Sanie",
  "Saniela",
  "Sanije",
  "Santiljano",
  "Sara",
  "Sario",
  "Sashenka",
  "Savio",
  "Saviola",
  "Sead",
  "Sebastiana",
  "Sebie",
  "Sedjan",
  "Sefedin",
  "Sefjon",
  "Seida",
  "Seidije",
  "Seit",
  "Sejdja",
  "Selam",
  "Seldi",
  "Selena",
  "Selim",
  "Selina",
  "Selma",
  "Selman",
  "Selmina",
  "Selnada",
  "Selva",
  "Selvina",
  "Semanuel",
  "Semanuela",
  "Semela",
  "Semi",
  "Senada",
  "Serdar",
  "Serdi",
  "Serdian",
  "Serenata",
  "Serielda",
  "Serjan",
  "Servet",
  "Serxhio",
  "Serxho",
  "Sesila",
  "Severina",
  "Severjana",
  "Sibora",
  "Sidorel",
  "Sidorela",
  "Sidrit",
  "Siger",
  "Sigita",
  "Sigli",
  "Sigrid",
  "Silda",
  "Silena",
  "Silma",
  "Silva",
  "Silvana",
  "Silvi",
  "Silvia",
  "Silvio",
  "Simela",
  "Simonela",
  "Simoneta",
  "Sindi",
  "Sindrit",
  "Sineda",
  "Siri",
  "Sirjan",
  "Sirjon",
  "Sirjusa",
  "Sivjola",
  "Skeldiona",
  "Skender",
  "Skenderie",
  "Skerdi",
  "Skerdian",
  "Skerdilajd",
  "Smilda",
  "Soelios",
  "Sofi",
  "Sofia",
  "Sofie",
  "Sofije",
  "Sofika",
  "Sofjana",
  "Sokol",
  "Sokolesha",
  "Sokrat",
  "Solida",
  "Sona",
  "Soni",
  "Sonia",
  "Sonida",
  "Sonila",
  "Sonilda",
  "Sonni",
  "Sonja",
  "Sorela",
  "Soren",
  "Sotir",
  "Sotira",
  "Sotiraq",
  "Soviela",
  "Spartak",
  "Spiro",
  "Stanela",
  "Stavri",
  "Stavros",
  "Stefan",
  "Stefanaq",
  "Stefani",
  "Stefania",
  "Stela",
  "Steljana",
  "Stesi",
  "Stilian",
  "Stiliana",
  "Stilianos",
  "Stiljano",
  "Stivi",
  "Suada",
  "Sualda",
  "Sued",
  "Sueda",
  "Suela",
  "Suida",
  "Suisa",
  "Sul",
  "Sulejman",
  "Sulo",
  "Susana",
  "Suzana",
  "Sytki",
  "Shaban",
  "Shahie",
  "Shahin",
  "Shajnela",
  "Shani",
  "Shaqir",
  "Sharlota",
  "Shazger",
  "Shazie",
  "Shazuman",
  "Shefa",
  "Shefqet",
  "Shega",
  "Shegert",
  "Shegerta",
  "Shegush",
  "Shendet",
  "Shergis",
  "Sherif",
  "Sherife",
  "Sherina",
  "Shero",
  "Shila",
  "Shima",
  "Shirli",
  "Shkelqim",
  "Shkelqimi",
  "Shkelzen",
  "Shkendije",
  "Shkëlqim",
  "Shpati",
  "Shpend",
  "Shpendi",
  "Shpetim",
  "Shpëtim",
  "Shpresa",
  "Shqiponja",
  "Shtylla",
  "Shuaip",
  "Shyqyri",
  "Tafil",
  "Tahir",
  "Tajar",
  "Tani",
  "Tanush",
  "Tanja",
  "Tasim",
  "Tatjana",
  "Tauland",
  "Taulant",
  "Taulla",
  "Tea",
  "Ted",
  "Tedi",
  "Tefta",
  "Tejdi",
  "Tela",
  "Teo",
  "Teodor",
  "Terenato",
  "Terenc",
  "Tereza",
  "Teri",
  "Terion",
  "Termet",
  "Tesi",
  "Teuta",
  "Tiko",
  "Tiku",
  "Tila",
  "Tili",
  "Tina",
  "Titi",
  "Tofik",
  "Tole",
  "Tomor",
  "Tomorr",
  "Tonela",
  "Toni",
  "Tonin",
  "Totila",
  "Trandafile",
  "Trejsi",
  "Trendelina",
  "Trifon",
  "Trojan",
  "Tulla",
  "Thanas",
  "Theano",
  "Thellenxa",
  "Themion",
  "Themis",
  "Theodhor",
  "Theodhora",
  "Theodhori",
  "Thoma",
  "Uarda",
  "Ueda",
  "Ueida",
  "Uelda",
  "Uendi",
  "Uerda",
  "Uljana",
  "Unitet",
  "Uran",
  "Urani",
  "Urania",
  "Urim",
  "Urjeta",
  "Uzri",
  "Vadiola",
  "Vahide",
  "Vait",
  "Valber",
  "Valbi",
  "Valdano",
  "Valdet",
  "Valentin",
  "Valentina",
  "Valentino",
  "Valeriano",
  "Vali",
  "Valjona",
  "Valmir",
  "Valmira",
  "Valter",
  "Valton",
  "Vanada",
  "Vanesa",
  "Vangjel",
  "Vangjush",
  "Vasi",
  "Vasian",
  "Vasiel",
  "Vasil",
  "Vasilika",
  "Vasillaq",
  "Vasip",
  "Vaso",
  "Vegim",
  "Vehbi",
  "Velika",
  "Veliko",
  "Venetike",
  "Vera",
  "Veri",
  "Verolina",
  "Veronika",
  "Vertit",
  "Vesa",
  "Vesara",
  "Veton",
  "Vigert",
  "Vijola",
  "Vikjana",
  "Viktor",
  "Viliand",
  "Vilma",
  "Vilsa",
  "Vilson",
  "Vilsona",
  "Vina",
  "Vini",
  "Vinjola",
  "Viola",
  "Violdi",
  "Violeta",
  "Viosana",
  "Virvan",
  "Visar",
  "Visiana",
  "Visjon",
  "Vitmar",
  "Vitorela",
  "Vitori",
  "Viturie",
  "Vivjana",
  "Vjandolin",
  "Vjola",
  "Vjoldan",
  "Vjoleta",
  "Vjollca",
  "Vjonis",
  "Vjosan",
  "Vjosana",
  "Vladimir",
  "Voltina",
  "Voltisa",
  "Vrapi",
  "Vullnet",
  "Wendi",
  "Xhafer",
  "Xhani",
  "Xhavit",
  "Xhefile",
  "Xhei",
  "Xhejni",
  "Xhekson",
  "Xhelal",
  "Xhelil",
  "Xhemi",
  "Xhemil",
  "Xheneta",
  "Xheni",
  "Xhenis",
  "Xhenisa",
  "Xhensi",
  "Xhensika",
  "Xhensil",
  "Xhensila",
  "Xhensir",
  "Xhensjana",
  "Xhenson",
  "Xhenuina",
  "Xhenjola",
  "Xherdian",
  "Xhesi",
  "Xhesiana",
  "Xhesika",
  "Xhesila",
  "Xhesilda",
  "Xhesjon",
  "Xhevahir",
  "Xhevat",
  "Xhevi",
  "Xhiberto",
  "Xhilda",
  "Xhiljola",
  "Xhina",
  "Xhino",
  "Xhoana",
  "Xhoel",
  "Xhoena",
  "Xhoi",
  "Xhonela",
  "Xhorxhina",
  "Xhovan",
  "Xhovana",
  "Xhuleta",
  "Xhuli",
  "Xhulia",
  "Xhulian",
  "Xhuliana",
  "Xhuliano",
  "Xhulieta",
  "Xhulio",
  "Xhulja",
  "Xhuljan",
  "Xhuljana",
  "Xhuljano",
  "Xhuljeta",
  "Xhuljo",
  "Xhynejd",
  "Ylber",
  "Ylvije",
  "Ylli",
  "Yllka",
  "Ymer",
  "Yrges",
  "Yzedin",
  "Yzeir",
  "Yzeiri",
  "Zace",
  "Zahide",
  "Zaim",
  "Zakarel",
  "Zaku",
  "Zamir",
  "Zamira",
  "Zana",
  "Zarif",
  "Zef",
  "Zefirin",
  "Zeir",
  "Zen",
  "Zenel",
  "Zeniola",
  "Zenun",
  "Zeqir",
  "Zija",
  "Zina",
  "Zini",
  "Zmira",
  "Zoi",
  "Zoje",
  "Zydi",
  "Zyerbi",
  "Zyhdi",
  "Zyhni",
  "Zhaklina",
  "Zhaneta",
  "Zhani",
  "Zhanina",
  "Zheni",
  "Zhuljen",
  "Zhuljeta",
  "Zhyljen"
];

/**
 * A simple function that converts a given word in string format into title case
 * @param {string} string string 1 word to convert
 * @returns a string word converted to title case
 */
function toTitleCase(string) {
  return string.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
}

window.isAlbanianName = function isAlbanianName(name) {
  if (typeof name === "string") {
    return list.includes(toTitleCase(name));
  }
  throw new Error(
    "Error: Only [string] supported but [" + typeof name + "] given"
  );
};
