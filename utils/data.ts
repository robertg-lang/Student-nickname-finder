import { Student } from '../types';

const rawData = `
A.M. Sophia, Sanpatna (Sean)
A.M. Sophia, Sanpatna (Sean)
A.M. Sophia, Sanpatna (Sean)
A.M. Sophia, Sanpatna (Sean)
A.M. Sophia, Sipatna (Sandrea)
A.M. Sophia, Sipatna (Sandrea)
A.M. Sophia, Sipatna (Sandrea)
A.M. Sophia, Sipatna (Sandrea)
Ahn, Seowoo
Ahn, Seowoo
Ahn, Seowoo
Ampanyuth, Chatrawee (Book)
Ampanyuth, Chatrawee (Book)
Ampanyuth, Chatrawee (Book)
Ampanyuth, Chatrawee (Book)
Ampanyuth, Kantanikarn (Bella)
Ampanyuth, Kantanikarn (Bella)
Ampanyuth, Kantanikarn (Bella)
Ampanyuth, Kantanikarn (Bella)
Ampornkotchakorn, Natharach (Win)
Ampornkotchakorn, Natharach (Win)
Ampornkotchakorn, Natharach (Win)
Ampornkotchakorn, Natharach (Win)
Ampornkotchakorn, Thamonnut (Muay)
Ampornkotchakorn, Thamonnut (Muay)
Ampornkotchakorn, Thamonnut (Muay)
Ampornkotchakorn, Thamonnut (Muay)
Anand, Karan
Anand, Karan
Anand, Karan
Anand, Karan
Anand, Karan
Anand, Karan
Angeles, Sariya (Ahya)
Angeles, Sariya (Ahya)
Angeles, Sariya (Ahya)
Angeles, Sariya (Ahya)
Angeles, Sariya (Ahya)
Aomkaew, Nachun (Na)
Aomkaew, Nachun (Na)
Aomkaew, Nachun (Na)
Aomkaew, Nachun (Na)
Aomkaew, Nachun (Na)
Apiwatwaninthorn, Sorawit (Wit)
Apiwatwaninthorn, Sorawit (Wit)
Apiwatwaninthorn, Sorawit (Wit)
Apiwatwaninthorn, Sorawit (Wit)
Apiwatwaninthorn, Sorawit (Wit)
Apiwatwaninthorn, Sorawit (Wit)
Arayakul, Sira (England)
Arayakul, Sira (England)
Arayakul, Sira (England)
Arayakul, Sira (England)
Arayakul, Sira (England)
Arayakul, Sira (England)
Arayakul, Sira (England)
Aroonkulprapa, Kochaporn (Prae)
Aroonkulprapa, Kochaporn (Prae)
Aroonkulprapa, Kochaporn (Prae)
Aroonkulprapa, Kochaporn (Prae)
Arunrugstichai, Jinwara (Gina)
Arunrugstichai, Jinwara (Gina)
Arunrugstichai, Jinwara (Gina)
Arunrugstichai, Jinwara (Gina)
Asakit, Khanapot (Dragon)
Asakit, Khanapot (Dragon)
Asakit, Khanapot (Dragon)
Asakit, Khanapot (Dragon)
Asakit, Khanapot (Dragon)
Asakit, Sasinapa (Unn-Unn)
Asakit, Sasinapa (Unn-Unn)
Asakit, Sasinapa (Unn-Unn)
Asakit, Sasinapa (Unn-Unn)
Baiagern, Samantha (Sam)
Baiagern, Samantha (Sam)
Baiagern, Samantha (Sam)
Baiagern, Samantha (Sam)
Baiagern, Siwat (Titan)
Baiagern, Siwat (Titan)
Baiagern, Siwat (Titan)
Baiagern, Siwat (Titan)
Baiagern, Siwat (Titan)
Baiphowongse, Sinanya (IngIng)
Baiphowongse, Sinanya (IngIng)
Baiphowongse, Sinanya (IngIng)
Baiphowongse, Sinanya (IngIng)
Baiphowongse, Sinanya (IngIng)
Balakauskas, Indre
Balakauskas, Indre
Balakauskas, Indre
Balakauskas, Indre
Bong, Seoyoon
Bong, Seoyoon
Bong, Seoyoon
Boonming, Russiya (Khao Suay)
Boonming, Russiya (Khao Suay)
Boonming, Russiya (Khao Suay)
Boonming, Russiya (Khao Suay)
Boonming, Russiya (Khao Suay)
Boonming, Russiya (Khao Suay)
Boonming, Sasiya (Khao Hom)
Boonming, Sasiya (Khao Hom)
Boonming, Sasiya (Khao Hom)
Boonruen, Naphara (Aom)
Boonruen, Naphara (Aom)
Boonruen, Naphara (Aom)
Boonruen, Naphara (Aom)
Boriboonsri, Thitirat (Yuri)
Boriboonsri, Thitirat (Yuri)
Boriboonsri, Thitirat (Yuri)
Boriboonsri, Thitirat (Yuri)
Boriboonsri, Thitirat (Yuri)
Borvonsin, Nattiya (Prim)
Borvonsin, Nattiya (Prim)
Borvonsin, Nattiya (Prim)
Borvonsin, Nattiya (Prim)
Borvonsin, Nattiya (Prim)
Borvonsin, Nattiya (Prim)
Budsaya-arunvidhya, Puncharat (Proud)
Budsaya-arunvidhya, Puncharat (Proud)
Budsaya-arunvidhya, Puncharat (Proud)
Budsaya-arunvidhya, Puncharat (Proud)
Budsaya-arunvidhya, Puncharat (Proud)
Budsaya-arunvidhya, Puncharat (Proud)
Bulpakdi, Jarupat (Mighty)
Bulpakdi, Jarupat (Mighty)
Bulpakdi, Jarupat (Mighty)
Bulpakdi, Jarupat (Mighty)
Bunarat, Yanatcha (Proud)
Bunarat, Yanatcha (Proud)
Bunditvorapoom, Pailin (Yao Yao)
Bunditvorapoom, Pailin (Yao Yao)
Bunditvorapoom, Pailin (Yao Yao)
Bunditvorapoom, Pailin (Yao Yao)
Bunditvorapoom, Pailin (Yao Yao)
Chaicham, Tass (Tass)
Chaicham, Tass (Tass)
Chaicham, Tass (Tass)
Chaikul, Sirikorn (Minnie)
Chaikul, Sirikorn (Minnie)
Chaikul, Sirikorn (Minnie)
Chaikul, Sirikorn (Minnie)
Chaisuparakul, Priyakorn (Mark)
Chaisuparakul, Priyakorn (Mark)
Chaisuparakul, Priyakorn (Mark)
Chaisuparakul, Priyakorn (Mark)
Chaisuparakul, Priyakorn (Mark)
Chalermkittichai, Pannavit (Xavier)
Chalermkittichai, Pannavit (Xavier)
Chand, Aditya Kumar (Ten Ten)
Chand, Aditya Kumar (Ten Ten)
Chand, Aditya Kumar (Ten Ten)
Chandhiraj, Dhakornkrit (Samut)
Chandhiraj, Dhakornkrit (Samut)
Chandhiraj, Dhakornkrit (Samut)
Chandhiraj, Dhakornkrit (Samut)
Chandhiraj, Dhakornkrit (Samut)
Chantarasupawong, Panboon (Pan)
Chantarasupawong, Panboon (Pan)
Chantarasupawong, Panboon (Pan)
Chantarasupawong, Panboon (Pan)
Charoenpacharaporn, Pongpanlop (Paul)
Charoenpacharaporn, Pongpanlop (Paul)
Charoenrat, Chollada (Grace)
Charoenrat, Chollada (Grace)
Charoenrat, Chollada (Grace)
Charoenrat, Chollada (Grace)
Charoenrat, Chollada (Grace)
Charoentanyarak, Vivee (Vivi)
Charoentanyarak, Vivee (Vivi)
Charoentanyarak, Vivee (Vivi)
Cheanvanit, Nichapa (Crystal)
Cheanvanit, Nichapa (Crystal)
Cheanvanit, Nichapa (Crystal)
Cheanvanit, Nichapa (Crystal)
Cheanvanit, Nishapat (Tang-Mo)
Cheanvanit, Nishapat (Tang-Mo)
Cheanvanit, Nishapat (Tang-Mo)
Cheanvanit, Nishapat (Tang-Mo)
Chen, Kexin (Kiki)
Chen, Kexin (Kiki)
Chen, Kexin (Kiki)
Chen, Kexin (Kiki)
Chen, Zhiyi (Jeremy)
Chen, Zhiyi (Jeremy)
Chen, Zhiyi (Jeremy)
Chen, Zhiyi (Jeremy)
Chen, Zhiyi (Jeremy)
Chimwises, Chayada (BB)
Chimwises, Chayada (BB)
Chimwises, Chayada (BB)
Chimwises, Chayada (BB)
Chivakreingkrai, Siripat (First)
Chivakreingkrai, Siripat (First)
Chivakreingkrai, Siripat (First)
Chivakreingkrai, Siripat (First)
Chivakreingkrai, Siripat (First)
Chivakreingkrai, Siripat (First)
Chivakreingkrai, Siriwat (Fluke)
Chivakreingkrai, Siriwat (Fluke)
Chivakreingkrai, Siriwat (Fluke)
Chivakreingkrai, Siriwat (Fluke)
Chivakreingkrai, Siriwat (Fluke)
Chivakreingkrai, Siriwat (Fluke)
Cho, Denzil Swae Win (Denzil)
Cho, Denzil Swae Win (Denzil)
Cho, Denzil Swae Win (Denzil)
Choi, Yeeun
Choi, Yeeun
Choi, Yeeun
Choi, Yeseul
Choi, Yeseul
Choi, Yeseul
Chonviriyabun, Kanjanick (Versailles)
Chonviriyabun, Kanjanick (Versailles)
Chonviriyabun, Kanjanick (Versailles)
Chonviriyabun, Kanjanick (Versailles)
Chonviriyabun, Pimphaporn (Venice)
Chonviriyabun, Pimphaporn (Venice)
Chonviriyabun, Pimphaporn (Venice)
Choonhaprasert, Chanisa (Pearl)
Choonhaprasert, Chanisa (Pearl)
Choonhaprasert, Chanisa (Pearl)
Chotbunwong, Salisa (Proud)
Chotbunwong, Salisa (Proud)
Chotbunwong, Salisa (Proud)
Chotbunwong, Salisa (Proud)
Chotbunwong, Salisa (Proud)
Chotbunwong, Salisa (Proud)
Chotsawetanan, Penprow (Monet)
Chotsawetanan, Penprow (Monet)
Chotsawetanan, Penprow (Monet)
Chotsawetanan, Penprow (Monet)
Chudabuddhi, Nanthee (Tee)
Chudabuddhi, Nanthee (Tee)
Chudabuddhi, Nanthee (Tee)
Chudabuddhi, Nanthee (Tee)
Chudasmita, Pranang (Tiny)
Chudasmita, Pranang (Tiny)
Chudasmita, Pranang (Tiny)
Chudasmita, Pranang (Tiny)
Chun, Jaehoon (Jay)
Chun, Jaehoon (Jay)
Chun, Jaehoon (Jay)
Chun, Jaehoon (Jay)
Chun, Jaehoon (Jay)
Chun, Jaehoon (Jay)
Chuntharusmi, Ramida (Dada)
Chuntharusmi, Ramida (Dada)
Chuntharusmi, Ramida (Dada)
Craig, Donovan
Craig, Donovan
Craig, Donovan
Dejthamrong, Piti (Pak)
Dejthamrong, Piti (Pak)
Dejthamrong, Piti (Pak)
Dhitsayakarnkoon, Chidapa (Moji)
Dhitsayakarnkoon, Chidapa (Moji)
Dhitsayakarnkoon, Chidapa (Moji)
Dhitsayakarnkoon, Chidapa (Moji)
Dhitsayakarnkoon, Chidapa (Moji)
Diao, Xiaoxiao (Emily)
Diao, Xiaoxiao (Emily)
Diao, Xiaoxiao (Emily)
Diao, Xiaoxiao (Emily)
Domeisen, Shayanne Fortuna
Domeisen, Shayanne Fortuna
Domeisen, Shayanne Fortuna
Dong, Yuling (Guinevere)
Dunne, Peter
Dunne, Peter
Dunne, Peter
Dunne, Peter
Dunne, Peter
Dunne, Peter
Engsombun, Khanatat (Keith)
Engsombun, Khanatat (Keith)
Engsombun, Khanatat (Keith)
Engsombun, Khanatat (Keith)
Engsombun, Khanatat (Keith)
Faramee, Klabodin (Din)
Faramee, Klabodin (Din)
Faramee, Klabodin (Din)
Gan, Ekkorn (Gan)
Gan, Ekkorn (Gan)
Gan, Ekkorn (Gan)
Gan, Ekkorn (Gan)
Gan, Ekkorn (Gan)
Gao, Xinyue (Joyce)
Gao, Xinyue (Joyce)
Gao, Xinyue (Joyce)
Ge, Bichuan (Jimmy)
Ge, Bichuan (Jimmy)
Ge, Bichuan (Jimmy)
Ge, Bichuan (Jimmy)
Ge, Bichuan (Jimmy)
Germain, Angelina
Germain, Angelina
Germain, Angelina
Germain, Angelina
Germain, Angelina
Gostner, Nicky
Gostner, Nicky
Gostner, Nicky
Gostner, Nicky
Guo, Zibei (Max)
Guo, Zibei (Max)
Guo, Zibei (Max)
Guo, Zibei (Max)
Guo, Zibei (Max)
Guo, Zibei (Max)
Gupta, Reyansh
Gupta, Reyansh
Gupta, Reyansh
Hanson, Dayne
Hanson, Dayne
Hanson, Dayne
Hanson, Liv
Hanson, Liv
Hanson, Liv
Hanson, Liv
Hildebrand, Ratana (Parm)
Hildebrand, Ratana (Parm)
Hildebrand, Ratana (Parm)
Hildebrand, Ratana (Parm)
Hildebrand, Ratana (Parm)
Hirunchupong, Priya
Hirunchupong, Priya
Hirunchupong, Priya
Hirunchupong, Priya
Hirunchupong, Priya
Hirunchupong, Priya
Hoshina, Akara Pimmason (Yuta)
Hoshina, Akara Pimmason (Yuta)
Hoshina, Akara Pimmason (Yuta)
Hoshina, Akara Pimmason (Yuta)
Hoshina, Akara Pimmason (Yuta)
Issarapinyo, Kunanya (Near)
Issarapinyo, Kunanya (Near)
Issarapinyo, Kunanya (Near)
Issarapinyo, Kunanya (Near)
Issarapinyo, Kunanya (Near)
Jalearnrojmongkol, Pawornwit (Panngern)
Jalearnrojmongkol, Pawornwit (Panngern)
Jalearnrojmongkol, Pawornwit (Panngern)
Jalearnrojmongkol, Pawornwit (Panngern)
Jalearnrojmongkol, Pawornwit (Panngern)
Jalearnrojmongkol, Pawornwit (Panngern)
Janpitukchai, Lalitpan (Paproud)
Janpitukchai, Lalitpan (Paproud)
Janpitukchai, Lalitpan (Paproud)
Janpitukchai, Lalitpan (Paproud)
Jantrakul, Sithsakorn (Marc)
Jantrakul, Sithsakorn (Marc)
Jantrakul, Sithsakorn (Marc)
Jantrakul, Sithsakorn (Marc)
Jantrakul, Sithsakorn (Marc)
Janyasakulwong, Dhan
Janyasakulwong, Dhan
Janyasakulwong, Dhan
Janyasakulwong, Dhan
Janyasakulwong, Dhan
Jin, Yinan (NanNan)
Jin, Yinan (NanNan)
Jin, Yinan (NanNan)
Jiracharnchaisiri, Dham (Jap)
Jiracharnchaisiri, Dham (Jap)
Jiracharnchaisiri, Dham (Jap)
Jiracharnchaisiri, Dham (Jap)
Jirapojaporn, Pornprapat (Pan)
Jirapojaporn, Pornprapat (Pan)
Jirapojaporn, Pornprapat (Pan)
Jittirat, Jidapa (Aiko)
Jittirat, Jidapa (Aiko)
Jittirat, Jidapa (Aiko)
Jittirat, Jidapa (Aiko)
Jittirat, Jidapa (Aiko)
Jo, Sunghwan
Jo, Sunghwan
Jo, Sunghwan
Jo, Sunghwan
Jongjaroonrungsun, Artista (Jessie)
Jongjaroonrungsun, Artista (Jessie)
Jongjaroonrungsun, Artista (Jessie)
Jongjaroonrungsun, Artista (Jessie)
Jung, Eunsu
Jung, Eunsu
Jung, Eunsu
Jung, Eunsu
Jung, Junseo
Jung, Junseo
Jung, Junseo
Jung, Junseo
Jung, Junseo
Jung, Junseo
Kaewkhong, Banlita (Tangkwa)
Kaewkhong, Banlita (Tangkwa)
Kaewkhong, Banlita (Tangkwa)
Kanchanakit, Sakchuta (Peak)
Kanchanakit, Sakchuta (Peak)
Karouy, Prawnipa (Proud)
Karouy, Prawnipa (Proud)
Karouy, Prawnipa (Proud)
Karouy, Prawnipa (Proud)
Keangear, Kankamol (Yok)
Keangear, Kankamol (Yok)
Keangear, Kankamol (Yok)
Keangear, Kankamol (Yok)
Kemp, Max (Max)
Kemp, Max (Max)
Kemp, Max (Max)
Ketsiri, Vongsapat (Ryo)
Ketsiri, Vongsapat (Ryo)
Ketsiri, Vongsapat (Ryo)
Ketsiri, Vongsapat (Ryo)
Ketsiri, Vongsapat (Ryo)
Khemayotin, Natthanun (Ni-Ne)
Khemayotin, Natthanun (Ni-Ne)
Khemayotin, Natthanun (Ni-Ne)
Khemayotin, Natthanun (Ni-Ne)
Kiatlertpongsa, Tarawin (Win)
Kiatlertpongsa, Tarawin (Win)
Kiatlertpongsa, Tarawin (Win)
Kiatlertpongsa, Weeranda (Wanda)
Kiatlertpongsa, Weeranda (Wanda)
Kiatlertpongsa, Weeranda (Wanda)
Kiatlertpongsa, Weeranda (Wanda)
Kiatlertpongsa, Weeranda (Wanda)
Kiatlertpongsa, Weeranda (Wanda)
Kijlertbanjong, Nadome (Dome)
Kijlertbanjong, Nadome (Dome)
Kijlertbanjong, Nadome (Dome)
Kijlertbanjong, Nadome (Dome)
Kijlertphairoj, Weerapat (Pung Pung)
Kijlertphairoj, Weerapat (Pung Pung)
Kijlertphairoj, Weerapat (Pung Pung)
Kijlertphairoj, Weerapat (Pung Pung)
Kijlertphairoj, Weerapat (Pung Pung)
Kim, Koo (Koo)
Kim, Koo (Koo)
Kim, Koo (Koo)
Kim, Koo (Koo)
Kim, Kyuwon
Kim, Kyuwon
Kim, Kyuwon
Kim, Sena
Kim, Sena
Kim, Sena
Kitcharoennaitham, Sorrawit (Jacky)
Kittiwongkorn, Kanoknooch (Pumpui)
Kittiwongkorn, Kanoknooch (Pumpui)
Kittiwongkorn, Kanoknooch (Pumpui)
Klungthamniam, Pornrawin (Ingtharn)
Klungthamniam, Pornrawin (Ingtharn)
Klungthamniam, Pornrawin (Ingtharn)
Ko, Lin Htet
Ko, Lin Htet
Ko, Lin Htet
Kongkiatsophon, Araya (Zen)
Kongkiatsophon, Araya (Zen)
Kongkiatsophon, Araya (Zen)
Kongkiatsophon, Araya (Zen)
Kongma, Alyssa (Paint)
Kongma, Alyssa (Paint)
Kongma, Alyssa (Paint)
Kongma, Alyssa (Paint)
Kongtoranin, Nicha (Sandy)
Kongtoranin, Nicha (Sandy)
Kongtoranin, Nicha (Sandy)
Kumar, Saura
Kumar, Saura
Kumar, Saura
Kumar, Saura
Kumar, Saura
Laipanya, Napisa (Manie)
Laipanya, Napisa (Manie)
Laipanya, Pitada (Monet)
Laipanya, Pitada (Monet)
Laipanya, Pitada (Monet)
Laipanya, Pitada (Monet)
Laipanya, Pitada (Monet)
Lancaster, Jaden Thomas H.
Lancaster, Jaden Thomas H.
Lancaster, Jaden Thomas H.
Laoharavee, Nisanart (Janie)
Laoharavee, Nisanart (Janie)
Laoharavee, Nisanart (Janie)
Laoharavee, Nisanart (Janie)
Laoharavee, Nisanart (Janie)
Laoharavee, Nisanart (Janie)
Lee, Jia
Lee, Jia
Lee, Jia
Lee, Jia
Lee, Jia
Leegomonchai, Prin (Chinjung)
Leegomonchai, Prin (Chinjung)
Leegomonchai, Prin (Chinjung)
Leegomonchai, Prin (Chinjung)
Leegomonchai, Tachaya (Miijung)
Leegomonchai, Tachaya (Miijung)
Leegomonchai, Tachaya (Miijung)
Leegomonchai, Tachaya (Miijung)
Leelapatana, Dueansong (Maijene)
Leelapatana, Dueansong (Maijene)
Leelapatana, Dueansong (Maijene)
Leelapatana, Dueansong (Maijene)
Lei, Chenxi (Arise)
Lei, Chenxi (Arise)
Lei, Chenxi (Arise)
Lerthirunvibul, Kantapat (Max)
Lerthirunvibul, Kantapat (Max)
Lerthirunvibul, Kantapat (Max)
Lerthirunvibul, Kantapat (Max)
Lerthirunvibul, Kantapat (Max)
Lerthirunvibul, Kantapat (Max)
Lertrattanachaikij, Chalat (Jotun)
Lertrattanachaikij, Chalat (Jotun)
Lertrattanachaikij, Chalat (Jotun)
Lertrattanachaikij, Chalat (Jotun)
Lertrattanachaikij, Chalat (Jotun)
Lertrattanachaikij, Sirikalaya (Nippon)
Lertrattanachaikij, Sirikalaya (Nippon)
Lertrattanachaikij, Sirikalaya (Nippon)
Lertrattanachaikij, Sirikalaya (Nippon)
Lertsakulsup, Paprawarin (Nhomjean)
Lertsakulsup, Paprawarin (Nhomjean)
Lertsakulsup, Paprawarin (Nhomjean)
Lertsakulsup, Paprawarin (Nhomjean)
Li, Jiayi (Daisy)
Li, Jiayi (Daisy)
Li, Jiayi (Daisy)
Li, Jiayue (Ruby)
Li, Jiayue (Ruby)
Li, Jiayue (Ruby)
Li, Keqiu (Kevin)
Li, Keqiu (Kevin)
Li, Keqiu (Kevin)
Li, Keqiu (Kevin)
Li, Qinhui (Michael)
Li, Qinhui (Michael)
Li, Qinhui (Michael)
Li, Qinhui (Michael)
Li, Xinyan (Alice)
Li, Xinyan (Alice)
Lim, Ahyeon (Ahyeon)
Lim, Ahyeon (Ahyeon)
Lim, Ahyeon (Ahyeon)
Limsuwan, Nicha
Limsuwan, Nicha
Limsuwan, Nicha
Limsuwan, Nicha
Liu, Daocheng (Tony)
Liu, Daocheng (Tony)
Liu, Daocheng (Tony)
Liu, Junxi (Tiger)
Liu, Junxi (Tiger)
Liu, Junxi (Tiger)
Loo, Salintip (Mona)
Loo, Salintip (Mona)
Loo, Salintip (Mona)
Losch, Mabry Anneke
Losch, Mabry Anneke
Losch, Mabry Anneke
Losch, Mabry Anneke
Low, Jasper Dhama (Jasper)
Low, Jasper Dhama (Jasper)
Low, Jasper Dhama (Jasper)
Low, Jasper Dhama (Jasper)
Lu, Senbao (Sunbow)
Lu, Senbao (Sunbow)
Lu, Senbao (Sunbow)
Luangthongkam, Pal (Kaopun)
Luangthongkam, Pal (Kaopun)
Luangthongkam, Pal (Kaopun)
Luangthongkam, Pal (Kaopun)
Luichant, Pichakhun (Ploy)
Luichant, Pichakhun (Ploy)
Luichant, Pichakhun (Ploy)
Luichant, Pichakhun (Ploy)
Luichant, Pichakhun (Ploy)
Luweera, Intouch (Shogun)
Luweera, Intouch (Shogun)
Luweera, Intouch (Shogun)
Luweera, Intouch (Shogun)
Ma, Lukas J
Ma, Lukas J
Ma, Lukas J
MacDonald, Megan
MacDonald, Megan
MacDonald, Megan
Maitreewech, Akkhara (Aung)
Maitreewech, Akkhara (Aung)
Maitreewech, Akkhara (Aung)
Mangkhalathanakun, Prach
Mangkhalathanakun, Prach
Mangkhalathanakun, Prach
Mangkhalathanakun, Prach
Mangkhalathanakun, Prach
Mangkhalathanakun, Prach
Mangsa, Nachapol (Mexx)
Mangsa, Nachapol (Mexx)
Mangsa, Nachapol (Mexx)
Mangsa, Nachapol (Mexx)
Mannas, Nattamon Emma
Mannas, Nattamon Emma
Mannas, Nattamon Emma
Mannas, Nattamon Emma
Manorotchaturong, Nutvarit (Gain)
Manorotchaturong, Nutvarit (Gain)
Manorotchaturong, Nutvarit (Gain)
Manorotchaturong, Nutvarit (Gain)
Manorotchaturong, Nutvarit (Gain)
Manorotchaturong, Nutvarit (Gain)
Markawat, Narith (Mark)
Markawat, Narith (Mark)
Markawat, Narith (Mark)
Markawat, Narith (Mark)
Markawat, Narith (Mark)
Matei, Sara Ania (Sara)
Matei, Sara Ania (Sara)
Matei, Sara Ania (Sara)
Matei, Sara Ania (Sara)
Matei, Sara Ania (Sara)
Matei, Thea Eliza (Thea)
Matei, Thea Eliza (Thea)
Matei, Thea Eliza (Thea)
Mebusaya, Priyapat (Fah-Mai)
Mebusaya, Priyapat (Fah-Mai)
Mebusaya, Priyapat (Fah-Mai)
Mebusaya, Priyapat (Fah-Mai)
Meepradit, Arithat (Taechin)
Meepradit, Arithat (Taechin)
Meepradit, Arithat (Taechin)
Meepradit, Arithat (Taechin)
Meepradit, Arithat (Taechin)
Meepradit, Arithat (Taechin)
Mekanuwongsa, Tataz (Taz)
Mekanuwongsa, Tataz (Taz)
Mekanuwongsa, Tataz (Taz)
Mekanuwongsa, Tataz (Taz)
Mekanuwongsa, Tataz (Taz)
Mekanuwongsa, Tataz (Taz)
Mektrakarn, Natamon (Panicha)
Mektrakarn, Natamon (Panicha)
Mektrakarn, Natamon (Panicha)
Mektrakarn, Natamon (Panicha)
Mektrakarn, Natamon (Panicha)
Meyhoefer, Isabel
Meyhoefer, Isabel
Meyhoefer, Isabel
Meyhoefer, Raisa
Meyhoefer, Raisa
Meyhoefer, Raisa
Meyhoefer, Raisa
Misra, Saanvi Udaishanker
Misra, Saanvi Udaishanker
Misra, Saanvi Udaishanker
Misra, Saanvi Udaishanker
Mistry, Vraj
Mistry, Vraj
Mistry, Vraj
Mistry, Vraj
Mistry, Vraj
Mohanashankar, Pavit (Krish)
Mohanashankar, Pavit (Krish)
Mohanashankar, Pavit (Krish)
Mohanashankar, Pavit (Krish)
Mohanashankar, Pavit (Krish)
Mulligan, Ambrozia
Mulligan, Ambrozia
Mulligan, Ambrozia
Mulligan, Ambrozia
Mung-Guy, Chawin (Morning)
Mung-Guy, Chawin (Morning)
Mungkornpanich, Chanisa (Fushi)
Mungkornpanich, Chanisa (Fushi)
Mungkornpanich, Chanisa (Fushi)
Murnane, Jacob Bima
Murnane, Jacob Bima
Murnane, Jacob Bima
Murnane, Jacob Bima
Murnane, Jacob Bima
Myat Thwe, Moe Myint (Alyssa)
Myat Thwe, Moe Myint (Alyssa)
Myat Thwe, Moe Myint (Alyssa)
Myat Thwe, Moe Myint (Alyssa)
Naredi, Tavishi
Naredi, Tavishi
Naredi, Tavishi
Naredi, Tavishi
Nawatrilap, Akarapat (Prem)
Nawatrilap, Akarapat (Prem)
Nawatrilap, Akarapat (Prem)
Nawatrilap, Akarapat (Prem)
Nawatrilap, Akarapat (Prem)
Nawatrilap, Akarapat (Prem)
Neleptchenko, Alina
Neleptchenko, Alina
Neleptchenko, Alina
Neleptchenko, Alina
Neui, Jun Jie Damien (JJ)
Neui, Jun Jie Damien (JJ)
Neui, Jun Jie Damien (JJ)
Neui, Jun Jie Damien (JJ)
Neui, Xinya Natalie (Jeda)
Neui, Xinya Natalie (Jeda)
Neui, Xinya Natalie (Jeda)
Ninyawee, Siravij (Mick)
Ninyawee, Siravij (Mick)
Ninyawee, Siravij (Mick)
Ninyawee, Siravij (Mick)
Ninyawee, Siravij (Mick)
Nirundorn, Pinyada (Pinn)
Nirundorn, Pinyada (Pinn)
Nirundorn, Pinyada (Pinn)
Nirundorn, Pinyada (Pinn)
Niruntranuchit, Punyarasmi (Mari)
Niruntranuchit, Punyarasmi (Mari)
Niruntranuchit, Punyarasmi (Mari)
Niruntranuchit, Punyarasmi (Mari)
Nittayakasetwat, Sitchanon (Mb)
Nittayakasetwat, Sitchanon (Mb)
Nittayakasetwat, Sitchanon (Mb)
Nittayakasetwat, Sitchanon (Mb)
O'Malley, Caleb Jake (Caleb)
O'Malley, Caleb Jake (Caleb)
O'Malley, Caleb Jake (Caleb)
O'Malley, Megan Rose (Megan)
O'Malley, Megan Rose (Megan)
O'Malley, Megan Rose (Megan)
On, Seungwon (Brian)
On, Seungwon (Brian)
On, Seungwon (Brian)
Ounmongkol, Kornnapat (Aom)
Ounmongkol, Kornnapat (Aom)
Ounmongkol, Kornnapat (Aom)
Ounmongkol, Kornnapat (Aom)
Ounmongkol, Kornnapat (Aom)
Ounmongkol, Kornnapat (Aom)
Ounruan, Sirintra (Praew)
Ounruan, Sirintra (Praew)
Ounruan, Sirintra (Praew)
Ounruan, Sirintra (Praew)
Palasak, Vichita (Proud)
Palasak, Vichita (Proud)
Palasak, Vichita (Proud)
Palasak, Vichita (Proud)
Palasak, Vichita (Proud)
Pasutharachati, Parin (Fa)
Pasutharachati, Parin (Fa)
Pasutharachati, Parin (Fa)
Pasutharachati, Tas
Pasutharachati, Tas
Pasutharachati, Tas
Pasutharachati, Tas
Pasutharachati, Tas
Pasutharachati, Tas
Patchimnan, Pitchayakrit (Keen)
Patchimnan, Pitchayakrit (Keen)
Patchimnan, Pitchayakrit (Keen)
Pattarachaiyanant, Rapeepat (Dice)
Pattarachaiyanant, Rapeepat (Dice)
Pattarachaiyanant, Rapeepat (Dice)
Pattarachaiyanant, Rapeepat (Dice)
Pawa, Prytdanai (Pryt)
Pawa, Prytdanai (Pryt)
Pawa, Prytdanai (Pryt)
Payupwattanawong, Thanawanta (Novem)
Payupwattanawong, Thanawanta (Novem)
Payupwattanawong, Thanawanta (Novem)
Payupwattanawong, Thanawanta (Novem)
Pearson, Mira Rebecca
Pearson, Mira Rebecca
Pearson, Mira Rebecca
Pearson, Mira Rebecca
Pearson, Mira Rebecca
Peng, Haoxuan (Max)
Peng, Haoxuan (Max)
Peng, Haoxuan (Max)
Pham, Ngoc Anh Duong (Sunny)
Pham, Ngoc Anh Duong (Sunny)
Pham, Ngoc Anh Duong (Sunny)
Pham, Ngoc Anh Duong (Sunny)
Pham, Ngoc Anh Duong (Sunny)
Phoomtrakul, Sahapharp (Pluem)
Phoomtrakul, Sahapharp (Pluem)
Phoomtrakul, Sahapharp (Pluem)
Phoomtrakul, Sahapharp (Pluem)
Phornprapha, Jesita (Jess)
Phornprapha, Jesita (Jess)
Phornprapha, Jesita (Jess)
Phornprapha, Jesita (Jess)
Phrommuenwai, Ponlaphat (Lotus)
Phrommuenwai, Ponlaphat (Lotus)
Phrommuenwai, Ponlaphat (Lotus)
Phrommuenwai, Ponlaphat (Lotus)
Phromsiri, Natdanhai (Fame)
Phunjamaneechot, Puripat (Prom)
Phunjamaneechot, Puripat (Prom)
Phunjamaneechot, Puripat (Prom)
Phunjamaneechot, Puripat (Prom)
Phunratanamala, Thitaree (Kao-Wan)
Phunratanamala, Thitaree (Kao-Wan)
Phunratanamala, Thitaree (Kao-Wan)
Phunratanamala, Thitaree (Kao-Wan)
Phunratanamala, Thitaree (Kao-Wan)
Phunratanamala, Thitaree (Kao-Wan)
Pibulnakarintr, Sidhiboon (Aree)
Pibulnakarintr, Sidhiboon (Aree)
Pibulnakarintr, Sidhiboon (Aree)
Pibulnakarintr, Sidhiboon (Aree)
Pibulnakarintr, Sidhiboon (Aree)
Pibulnakarintr, Sidhiboon (Aree)
Pittayathikhun, Bio
Pittayathikhun, Bio
Pittayathikhun, Bio
Pittayathikhun, Bio
Piyawattanametha, Aaron
Piyawattanametha, Aaron
Piyawattanametha, Aaron
Piyawattanametha, Aaron
Piyawattanametha, Techatat (Bank)
Piyawattanametha, Techatat (Bank)
Piyawattanametha, Techatat (Bank)
Piyawattanametha, Techatat (Bank)
Piyawattanametha, Techatat (Bank)
Poldetch, Pakawat (Messi)
Poldetch, Pakawat (Messi)
Poldetch, Pakawat (Messi)
Poldetch, Pakawat (Messi)
Poldetch, Pakawat (Messi)
Pomsuwan, Chayakorn Suwansang (Nelson)
Pomsuwan, Chayakorn Suwansang (Nelson)
Pomsuwan, Chayakorn Suwansang (Nelson)
Pomsuwan, Chayakorn Suwansang (Nelson)
Pomsuwan, Chayakorn Suwansang (Nelson)
Pomsuwan, Chayakorn Suwansang (Nelson)
Pongwilai, Nutwaree (Wari)
Pongwilai, Nutwaree (Wari)
Pongwilai, Nutwaree (Wari)
Pongwilai, Nutwaree (Wari)
Poolsawat, Akarin (Khem)
Poolsawat, Akarin (Khem)
Poolsawat, Akarin (Khem)
Poolsawat, Akarin (Khem)
Poolsawat, Akarin (Khem)
Powattanachai, Khananop (Sea)
Powattanachai, Khananop (Sea)
Prajapati, Maitri
Prajapati, Maitri
Prajapati, Maitri
Prajapati, Maitri
Prajapati, Maitri
Prajapati, Maitri
Prasarnsiwamai, Sutheepong (Phum)
Prasarnsiwamai, Sutheepong (Phum)
Prasarnsiwamai, Sutheepong (Phum)
Prasarnsiwamai, Sutheepong (Phum)
Prasattongosoth, Vichapol (Rocco)
Prasattongosoth, Vichapol (Rocco)
Prasattongosoth, Vichapol (Rocco)
Prasattongosoth, Vichapol (Rocco)
Prasattongosoth, Vichapol (Rocco)
Prasertsilapa, Chaiyakrid (Krid)
Prasertsilapa, Chaiyakrid (Krid)
Prasertsilapa, Chaiyakrid (Krid)
Prasertsilapa, Chaiyakrid (Krid)
Prasertsilapa, Pongpon (Pooh)
Prasertsilapa, Pongpon (Pooh)
Prasertsilapa, Pongpon (Pooh)
Pravitra, Nara (Wind)
Pravitra, Nara (Wind)
Pravitra, Nara (Wind)
Pravitra, Nara (Wind)
Pravitra, Nara (Wind)
Prayoonthong, Thanus (Jedi)
Prayoonthong, Thanus (Jedi)
Prayoonthong, Thanus (Jedi)
Prayoonthong, Thanus (Jedi)
Puengchanchaikul, Voranan (Bene)
Puengchanchaikul, Voranan (Bene)
Puengchanchaikul, Voranan (Bene)
Puengchanchaikul, Voranan (Bene)
Puengchanchaikul, Voranan (Bene)
Pumipitak, Phoom
Pumipitak, Phoom
Pumipitak, Phoom
Pumipitak, Phoom
Pumipitak, Phoom
Qawvasut, Kamolsith (Cello)
Qawvasut, Kamolsith (Cello)
Qawvasut, Kamolsith (Cello)
Qawvasut, Thannaree (Violin)
Qawvasut, Thannaree (Violin)
Qawvasut, Thannaree (Violin)
Rabeapana, Aphatsara (Jen)
Rabeapana, Aphatsara (Jen)
Rabeapana, Aphatsara (Jen)
Rabeapana, Aphatsara (Jen)
Rattananavathong, Archawin (Kungfu)
Rattananavathong, Archawin (Kungfu)
Rattananavathong, Archawin (Kungfu)
Rattananavathong, Archawin (Kungfu)
Rattanapongporn, Napaphat (Namton)
Rattanapongporn, Napaphat (Namton)
Rattanapongporn, Napaphat (Namton)
Rattanapongporn, Napaphat (Namton)
Rattanapongporn, Napaphat (Namton)
Rattanaveroj, Sudfah (Sky)
Rattanaveroj, Sudfah (Sky)
Rattanaveroj, Sudfah (Sky)
Ratthawekin, Pabhada (Jorm)
Ratthawekin, Pabhada (Jorm)
Ratthawekin, Pabhada (Jorm)
Ratthawekin, Pabhada (Jorm)
Ratthawekin, Pabhada (Jorm)
Raungpaka, Ponatchar (Pana)
Raungpaka, Ponatchar (Pana)
Raungpaka, Ponatchar (Pana)
Reuangronglakkhana, Lakkawin (Jaytin)
Reuangronglakkhana, Lakkawin (Jaytin)
Reuangronglakkhana, Lakkawin (Jaytin)
Reuangronglakkhana, Lakkawin (Jaytin)
Reuangronglakkhana, Lakkawin (Jaytin)
Rochanaroon, Weerapath Elijah
Rochanaroon, Weerapath Elijah
Rochanaroon, Weerapath Elijah
Rojsripaiboon, Phatsu (Pingfu)
Rojsripaiboon, Phatsu (Pingfu)
Rojsripaiboon, Phatsu (Pingfu)
Rojsripaiboon, Phatsu (Pingfu)
Roth, Britton Michael
Roth, Britton Michael
Roth, Britton Michael
Roth, Lincoln
Roth, Lincoln
Roth, Lincoln
Roth, Lincoln
Ruankaeo, Buris (Apec)
Ruankaeo, Buris (Apec)
Rungnoppakunsri, Nannaphat (Neenae)
Rungnoppakunsri, Nannaphat (Neenae)
Rungnoppakunsri, Nannaphat (Neenae)
Rungnoppakunsri, Nannaphat (Neenae)
Rungnoppakunsri, Nirawit (Nine)
Rungnoppakunsri, Nirawit (Nine)
Rungnoppakunsri, Nirawit (Nine)
Rungnoppakunsri, Nirawit (Nine)
Rungnoppakunsri, Nirawit (Nine)
Sae Sae, Yotsaphon (Wai Wai)
Sae Sae, Yotsaphon (Wai Wai)
Sae Sae, Yotsaphon (Wai Wai)
Sae-Heng, Natprima (Wawa)
Sae-Heng, Natprima (Wawa)
Sae-Heng, Natprima (Wawa)
Sae-Heng, Natprima (Wawa)
Sae-Heng, Natprima (Wawa)
Sae-Heng, Natprima (Wawa)
Sakornsin, Marisa
Sakornsin, Marisa
Sakornsin, Marisa
Sakornsin, Marisa
Sakornsin, Marisa
Sanpatchayapong, Kan
Sanpatchayapong, Kan
Sanpatchayapong, Kan
Sanpatchayapong, Kan
Sanpatchayapong, Kan
Satcharoen, Pinichwarakan (Ein)
Satcharoen, Pinichwarakan (Ein)
Satcharoen, Pinichwarakan (Ein)
Satcharoen, Pinichwarakan (Ein)
Satcharoen, Pinichwarakan (Ein)
Satithamajit, Prim
Satithamajit, Prim
Satithamajit, Prim
Satithamajit, Prim
Sawangrut, Palm
Sawangrut, Palm
Sawangrut, Palm
Sawangrut, Palm
Scott, Angelo Logan Klongtruadroke
Scott, Angelo Logan Klongtruadroke
Scott, Angelo Logan Klongtruadroke
Scott, Angelo Logan Klongtruadroke
Scott, Angelo Logan Klongtruadroke
Scott, Angelo Logan Klongtruadroke
Seesai, Pimlapas (Aey)
Seesai, Pimlapas (Aey)
Seesai, Pimlapas (Aey)
Seesai, Pimlapas (Aey)
Seetisarn, Puvit (Earth)
Seetisarn, Puvit (Earth)
Seetue, Worawat (Victor)
Seetue, Worawat (Victor)
Seetue, Worawat (Victor)
Seetue, Worawat (Victor)
Seetue, Worawat (Victor)
Seetue, Worawat (Victor)
Sethaputra, Tyna MacPherson (Tyna)
Sethaputra, Tyna MacPherson (Tyna)
Sethaputra, Tyna MacPherson (Tyna)
Sethaputra, Tyna MacPherson (Tyna)
Sethaputra, Tyna MacPherson (Tyna)
Setthiwanit, Varitchaya (Meiji)
Setthiwanit, Varitchaya (Meiji)
Setthiwanit, Varitchaya (Meiji)
Setthiwanit, Varitchaya (Meiji)
Sevikul, Piyawadee (Pearl)
Sevikul, Piyawadee (Pearl)
Sevikul, Piyawadee (Pearl)
Sevikul, Piyawadee (Pearl)
Shah, Kevin Hirenkumar
Shah, Kevin Hirenkumar
Shah, Kevin Hirenkumar
Shah, Kevin Hirenkumar
Shah, Kevin Hirenkumar
Shah, Kevin Hirenkumar
Shavalikul, Pariyakorn (Unna)
Shavalikul, Pariyakorn (Unna)
Shavalikul, Pariyakorn (Unna)
Shavalikul, Pariyakorn (Unna)
Shavalikul, Pariyakorn (Unna)
Simic, Yngwie Maximus (Yngwie)
Simic, Yngwie Maximus (Yngwie)
Simic, Yngwie Maximus (Yngwie)
Simic, Yngwie Maximus (Yngwie)
Simic, Yngwie Maximus (Yngwie)
Singala, Aarshi
Singala, Aarshi
Singala, Aarshi
Singh, Ridhant
Singh, Ridhant
Singh, Ridhant
Singh, Ridhant
Singh, Ridhant
Singh, Ridhant
Sinthuchat, Sikkha (Tasan)
Sinthuchat, Sikkha (Tasan)
Sinthuchat, Sikkha (Tasan)
Sinthuchat, Sikkha (Tasan)
Siragarun, Phurin (Jedai)
Siragarun, Phurin (Jedai)
Siragarun, Phurin (Jedai)
Siragarun, Phurin (Jedai)
Siragarun, Phurin (Jedai)
Siragarun, Phurin (Jedai)
Siriamornsith, Penpunnee (Penny)
Siriamornsith, Penpunnee (Penny)
Siriamornsith, Penpunnee (Penny)
Siriamornsith, Penpunnee (Penny)
Siribunchawan, Bulakorn (Bengal)
Siribunchawan, Bulakorn (Bengal)
Siribunchawan, Bulakorn (Bengal)
Siribunchawan, Bulakorn (Bengal)
Sirimongkonpak, Minlada (Leah)
Sirimongkonpak, Minlada (Leah)
Sirimongkonpak, Minlada (Leah)
Sirimothya, Akira (Atom)
Sirimothya, Akira (Atom)
Sirimothya, Akira (Atom)
Sirimothya, Akira (Atom)
Siripattanataparkdee, Nutnichar (Bonus)
Siripattanataparkdee, Nutnichar (Bonus)
Siripattanataparkdee, Nutnichar (Bonus)
Siripattanataparkdee, Nutnichar (Bonus)
Siripubarn, Boonchaya (Toophom)
Siripubarn, Boonchaya (Toophom)
Siripubarn, Boonchaya (Toophom)
Siripubarn, Boonchaya (Toophom)
Sithayatam, Ranida (Ingfa)
Sithayatam, Ranida (Ingfa)
Sithayatam, Ranida (Ingfa)
Sithayatam, Ranida (Ingfa)
Sivapornrat, Anyapat (Bouquet)
Sivapornrat, Anyapat (Bouquet)
Sivapornrat, Anyapat (Bouquet)
Sivapornrat, Anyapat (Bouquet)
Sivapornrat, Anyapat (Bouquet)
Sivapornrat, Panarat (Bam)
Sivapornrat, Panarat (Bam)
Sivapornrat, Panarat (Bam)
Sivapornrat, Panarat (Bam)
Smith, Jazmine (Jazzy)
Smith, Jazmine (Jazzy)
Smith, Jazmine (Jazzy)
Smith, Jazmine (Jazzy)
Smith, Jazmine (Jazzy)
Smith, Jazmine (Jazzy)
Snidvongs na Ayudhya, Prasertpoj (Nam Ake)
Snidvongs na Ayudhya, Prasertpoj (Nam Ake)
Snidvongs na Ayudhya, Prasertpoj (Nam Ake)
Snidvongs Na Ayudhya, Viranart (Nam Neung)
Snidvongs Na Ayudhya, Viranart (Nam Neung)
Snidvongs Na Ayudhya, Viranart (Nam Neung)
Snidvongs Na Ayudhya, Viranart (Nam Neung)
Snitwongse, Prompichcha (Ivy)
Snitwongse, Prompichcha (Ivy)
Snitwongse, Prompichcha (Ivy)
Song, Seungmin
Song, Seungmin
Song, Seungmin
Song, Seungmin
Song, Seungmin
Soponpitsut, Lamsam (Kevin)
Soponpitsut, Lamsam (Kevin)
Soponpitsut, Lamsam (Kevin)
Soponpitsut, Lamsam (Kevin)
Srethbhadi, Natchamonn (Pimjai)
Srethbhadi, Natchamonn (Pimjai)
Srethbhadi, Natchamonn (Pimjai)
Srethbhadi, Natchamonn (Pimjai)
Sriintravanich, Praemai
Sriintravanich, Praemai
Sriintravanich, Praemai
Sriintravanich, Praemai
Srikaraket, Phacharaaumporn (Fahsai)
Srikaraket, Phacharaaumporn (Fahsai)
Srikaraket, Phacharaaumporn (Fahsai)
Srikaraket, Phacharaaumporn (Fahsai)
Srikaraket, Phacharaaumporn (Fahsai)
Srikhrua, Praan
Srikhrua, Praan
Srikhrua, Praan
Srikrod, Kultharint Loywattana (Gale)
Srikrod, Kultharint Loywattana (Gale)
Srikrod, Kultharint Loywattana (Gale)
Srikrod, Kultharint Loywattana (Gale)
Suesattabongkoch, Chutikarn (Focus)
Suesattabongkoch, Chutikarn (Focus)
Suesattabongkoch, Chutikarn (Focus)
Suesattabongkoch, Chutikarn (Focus)
Sundaramani, Wipob (Kao)
Sundaramani, Wipob (Kao)
Sundaramani, Wipob (Kao)
Sundaramani, Wipob (Kao)
Sundaramani, Wipob (Kao)
Sung, Yujun (Ethan)
Sung, Yujun (Ethan)
Sung, Yujun (Ethan)
Sung, Yujun (Ethan)
Sung, Yujun (Ethan)
Suphanimitwatsana, Nutnicha (Nicha)
Suphanimitwatsana, Nutnicha (Nicha)
Suphanimitwatsana, Nutnicha (Nicha)
Suphanimitwatsana, Nutnicha (Nicha)
Suriyan, Nakrob (Gun)
Suriyan, Nakrob (Gun)
Suriyan, Nakrob (Gun)
Suvikapakornkul, Nattaya (Mook)
Ta-ngam, Natpimol (Prodepran)
Ta-ngam, Natpimol (Prodepran)
Ta-ngam, Natpimol (Prodepran)
Ta-ngam, Natpimol (Prodepran)
Ta-ngam, Natpimol (Prodepran)
Ta-ngam, Natpimol (Prodepran)
Takviriyanun, Patcharanun (Misa)
Takviriyanun, Patcharanun (Misa)
Takviriyanun, Patcharanun (Misa)
Takviriyanun, Patcharanun (Misa)
Takviriyanun, Patcharanun (Misa)
Tang, Haoyin (Haohao)
Tang, Haoyin (Haohao)
Tang, Haoyin (Haohao)
Tang, Pattapon (Craig)
Tang, Pattapon (Craig)
Tang, Pattapon (Craig)
Tang, Pattapon (Craig)
Tang, Pattapon (Craig)
Tangchalermkul, Numn (Tete)
Tangchalermkul, Numn (Tete)
Tangchalermkul, Numn (Tete)
Tangchalermkul, Numn (Tete)
Tangruthaiwanich, Kundol (Canoe)
Tangruthaiwanich, Kundol (Canoe)
Tangruthaiwanich, Kundol (Canoe)
Tangruthaiwanich, Kundol (Canoe)
Tangruthaiwanich, Kundol (Canoe)
Tangruthaiwanich, Kundol (Canoe)
Tangruthaiwanich, Nuttapat (Canon)
Tangruthaiwanich, Nuttapat (Canon)
Tangruthaiwanich, Nuttapat (Canon)
Tangtrakulwongse, Pichaya (Pete)
Tangtrakulwongse, Pichaya (Pete)
Tangtrakulwongse, Pichaya (Pete)
Tangtrakulwongse, Pichaya (Pete)
Tangtrakulwongse, Pichaya (Pete)
Tangtrakulwongse, Pichaya (Pete)
Tansuwan, Ayya (Eve)
Tansuwan, Ayya (Eve)
Tansuwan, Ayya (Eve)
Tansuwan, Ayya (Eve)
Tayeejan, Sasiprapa (Yingying)
Tayeejan, Sasiprapa (Yingying)
Tayeejan, Sasiprapa (Yingying)
Tayeejan, Sasiprapa (Yingying)
Techa-itthiporn, Wipuch (Boeing)
Techa-itthiporn, Wipuch (Boeing)
Techa-itthiporn, Wipuch (Boeing)
Techakamphousha, Setthabhat (Keeno)
Techakamphousha, Setthabhat (Keeno)
Techakamphousha, Setthabhat (Keeno)
Teepakorn, Nuttakan (Great)
Teepakorn, Nuttakan (Great)
Teepakorn, Nuttakan (Great)
Teepakorn, Nuttakan (Great)
Teepakorn, Nuttakan (Great)
Teeraprawatekul, Avarin (Ing)
Teeraprawatekul, Avarin (Ing)
Teeraprawatekul, Avarin (Ing)
Teeraprawatekul, Avarin (Ing)
Teeraprayoon, Siri (Tae)
Teeraprayoon, Siri (Tae)
Teeraprayoon, Siri (Tae)
Teeraprayoon, Siri (Tae)
Teeraprayoon, Siri (Tae)
Teeraprayoon, Siri (Tae)
Teeraprayoon, Siri (Tae)
Teeraprayoon, Siwat (Tongchin)
Teeraprayoon, Siwat (Tongchin)
Teeraprayoon, Siwat (Tongchin)
Teeraprayoon, Siwat (Tongchin)
Teeraprayoon, Siwat (Tongchin)
Teeraprayoon, Wankanok (Third)
Teeraprayoon, Wankanok (Third)
Teeraprayoon, Wankanok (Third)
Teeraprayoon, Wankanok (Third)
Thaithongsuk, Chalad (Power)
Thaithongsuk, Chalad (Power)
Thaithongsuk, Chalad (Power)
Thaithongsuk, Chalad (Power)
Thaithongsuk, Chalad (Power)
Thanapatdej, Chayapol (Hero)
Thanapatdej, Chayapol (Hero)
Thanapatdej, Chayapol (Hero)
Thanapatdej, Chayapol (Hero)
Thanapatdej, Chayapol (Hero)
Thanapatdej, Chayapol (Hero)
Thanasitthipan, Kakkanin (Mek)
Thanasitthipan, Kakkanin (Mek)
Thanasitthipan, Kakkanin (Mek)
Thanasitthipan, Kakkanin (Mek)
Thanasitthipan, Kakkanin (Mek)
Thanatanant, Chin
Thanatanant, Chin
Thanatanant, Chin
Thanatanant, Chin
Thanatanant, Prin
Thanatanant, Prin
Thanatanant, Prin
Thanatanant, Prin
Thanatanant, Prin
Thanglerdsumpan, Warith (Gago)
Thanglerdsumpan, Warith (Gago)
Thanglerdsumpan, Warith (Gago)
Thanglerdsumpan, Warith (Gago)
Thanglerdsumpan, Warith (Gago)
Thangsumphant, Kitisit (Por Por)
Thangsumphant, Kitisit (Por Por)
Thangsumphant, Kitisit (Por Por)
Thangsumphant, Kitisit (Por Por)
Thepayasuwan, Chananun (Maprang)
Thepayasuwan, Chananun (Maprang)
Thepayasuwan, Chananun (Maprang)
Thepayasuwan, Chananun (Maprang)
Thepayasuwan, Chananun (Maprang)
Thepayasuwan, Chananun (Maprang)
Thienmanee, Tachataj (Gem)
Thienmanee, Tachataj (Gem)
Thienmanee, Tachataj (Gem)
Thienmanee, Tachataj (Gem)
Thienmanee, Tachataj (Gem)
Thongarunyik, Haritchanan (Mini)
Thongarunyik, Haritchanan (Mini)
Thongarunyik, Haritchanan (Mini)
Thongarunyik, Haritchanan (Mini)
Thongarunyik, Haritchanan (Mini)
Thuleeratanarom, Thawalrat (Kat)
Thuleeratanarom, Thawalrat (Kat)
Thuleeratanarom, Thawalrat (Kat)
Thuleeratanarom, Thawalrat (Kat)
Thuleeratanarom, Thawalrat (Kat)
Tonnamning, Benyapa (Mim)
Tonnamning, Benyapa (Mim)
Tonnamning, Benyapa (Mim)
Tonnamning, Benyapa (Mim)
Tonnamning, Benyapa (Mim)
Tonnamning, Benyapa (Mim)
Trangadisaikul, Boonyakorn (Yuro)
Trangadisaikul, Boonyakorn (Yuro)
Trangadisaikul, Boonyakorn (Yuro)
Trangadisaikul, Boonyakorn (Yuro)
Trangadisaikul, Boonyakorn (Yuro)
Trangadisaikul, Boonyakorn (Yuro)
Trangadisaikul, Boonyakorn (Yuro)
Trivisvavet, Pimnapa (Pim)
Trivisvavet, Pimnapa (Pim)
Trivisvavet, Pimnapa (Pim)
Trivisvavet, Pimnapa (Pim)
Trivisvavet, Pimnapa (Pim)
Uaisin, Thanaphak (Phak)
Uchupalanun, Aornvara (Prin)
Uchupalanun, Aornvara (Prin)
Uchupalanun, Aornvara (Prin)
Uchupalanun, Aornvara (Prin)
Uchupalanun, Aornvara (Prin)
Uchupalanun, Chavit (Nonn)
Uchupalanun, Chavit (Nonn)
Uchupalanun, Chavit (Nonn)
Uchupalanun, Chavit (Nonn)
Umanskiy, Elizabeth Nicole (Lizzie)
Umanskiy, Elizabeth Nicole (Lizzie)
Umanskiy, Elizabeth Nicole (Lizzie)
Umpujh, Pattarinee (Pinku)
Umpujh, Pattarinee (Pinku)
Umpujh, Pattarinee (Pinku)
Uthaititpitak, Patthanan (Ouk)
Uthaititpitak, Patthanan (Ouk)
Uthaititpitak, Patthanan (Ouk)
Uthaititpitak, Patthanan (Ouk)
Uttamais, Celyn
Uttamais, Celyn
Uttamais, Celyn
Uttamais, Celyn
Vanijwongse, Ella
Vanijwongse, Ella
Vanijwongse, Ella
Vanijwongse, Ella
Veeratanabutr, La-aungdao (Nana)
Veeratanabutr, La-aungdao (Nana)
Veeratanabutr, La-aungdao (Nana)
Veeratanabutr, La-aungdao (Nana)
Veeratanabutr, La-aungdao (Nana)
Viriyayodyiem, Kulisara (Xin)
Viriyayodyiem, Kulisara (Xin)
Viriyayodyiem, Kulisara (Xin)
Viriyayodyiem, Kulisara (Xin)
Viriyayodyiem, Siwat (Saan)
Viriyayodyiem, Siwat (Saan)
Viriyayodyiem, Siwat (Saan)
Viriyayodyiem, Siwat (Saan)
Viriyayodyiem, Siwat (Saan)
Visedpaitoon, Thanasorn (Pooh)
Visedpaitoon, Thanasorn (Pooh)
Visedpaitoon, Thanasorn (Pooh)
Vongkusolkit, Navaporn (Gene)
Vongkusolkit, Navaporn (Gene)
Vongkusolkit, Navaporn (Gene)
Vongkusolkit, Navaporn (Gene)
Vongkusolkit, Varit (JJ)
Vongkusolkit, Varit (JJ)
Vongkusolkit, Varit (JJ)
Vongkusolkit, Varit (JJ)
Vongkusolkit, Varit (JJ)
Wachiralappaitoon, Wiphada (Pam)
Wachiralappaitoon, Wiphada (Pam)
Wachiralappaitoon, Wiphada (Pam)
Wachiralappaitoon, Wiphada (Pam)
Wachiralappaitoon, Wiphada (Pam)
Wachiralappaitoon, Wiphada (Pam)
Wang, Chenhao (Rockie)
Wang, Chenhao (Rockie)
Wang, Chenhao (Rockie)
Wang, Yihan (Laura)
Wang, Yihan (Laura)
Wang, Yihan (Laura)
Wang, Yihan (Laura)
Wang, Yixi (Caitlin)
Wang, Yixi (Caitlin)
Wang, Yixi (Caitlin)
Wannakajornkit, Phuwakrit (Ren)
Wannakajornkit, Phuwakrit (Ren)
Wannakajornkit, Phuwakrit (Ren)
Wannakajornkit, Phuwakrit (Ren)
Wannakajornkit, Phuwakrit (Ren)
Wannakajornkit, Phuwakrit (Ren)
Wawat, Kemjira (Jira)
Wawat, Kemjira (Jira)
Wawat, Kemjira (Jira)
Wawat, Kemjira (Jira)
Wawat, Kemjira (Jira)
Wawat, Kemjira (Jira)
Wonghathaithip, Thanapong (Palm)
Wonghathaithip, Thanapong (Palm)
Wonghathaithip, Thanapong (Palm)
Wonghathaithip, Thanapong (Palm)
Wongrathanandha, Boonyopas (Boon)
Wongrathanandha, Boonyopas (Boon)
Wongrathanandha, Boonyopas (Boon)
Wongrathanandha, Boonyopas (Boon)
Wongrathanandha, Boonyopas (Boon)
Wongrathanandha, Boonyopas (Boon)
Wongsrisupakul, Amira (Amy)
Wongsrisupakul, Amira (Amy)
Wongsrisupakul, Amira (Amy)
Wongsrisupakul, Amira (Amy)
Wongsrisupakul, Amira (Amy)
Wongwannaraksa, Akira (Kira)
Wongwannaraksa, Akira (Kira)
Wongwannaraksa, Akira (Kira)
Wongwannaraksa, Akira (Kira)
Wongwannaraksa, Akira (Kira)
Worrell, Jayden
Worrell, Jayden
Worrell, Jayden
Wright, Parinlada (Vicka)
Wright, Parinlada (Vicka)
Wright, Parinlada (Vicka)
Wright, Parinlada (Vicka)
Wu, Zhengrui (Max)
Wu, Zhengrui (Max)
Wu, Zhengrui (Max)
Xiong, Yuankai (Kevin)
Xiong, Yuankai (Kevin)
Xiong, Yuankai (Kevin)
Xiong, Yuankai (Kevin)
Xiong, Yuankai (Kevin)
Xu, Yongnian (Tony)
Xu, Yongnian (Tony)
Xu, Yongnian (Tony)
Xu, Yongnian (Tony)
Xu, Zhuoran (Jordan)
Xu, Zhuoran (Jordan)
Yang, Yihan (Elsa)
Yang, Yihan (Elsa)
Yang, Yihan (Elsa)
Yang, Yihan (Elsa)
Yang, Yihan (Elsa)
Yangsakunshinnapak, Patchareerat (NewNew)
Yangsakunshinnapak, Patchareerat (NewNew)
Yangsakunshinnapak, Patchareerat (NewNew)
Yangsakunshinnapak, Patchareerat (NewNew)
Yangsakunshinnapak, Patchareerat (NewNew)
Yangsakunshinnapak, Patchareerat (NewNew)
Yu, Jincheng (Billy)
Yu, Jincheng (Billy)
Yu, Jincheng (Billy)
Yuttayong, Rattavinat (Tonnam)
Yuttayong, Rattavinat (Tonnam)
Yuttayong, Rattavinat (Tonnam)
Yuttayong, Rattavinat (Tonnam)
Yutthasarnsiri, Ranrachata (U.S.)
Yutthasarnsiri, Ranrachata (U.S.)
Yutthasarnsiri, Ranrachata (U.S.)
Yutthasarnsiri, Ranrachata (U.S.)
Yutthasarnsiri, Ranrachata (U.S.)
Yuwari, Krint (Gino)
Yuwari, Krint (Gino)
Yuwari, Krint (Gino)
Yuwari, Krint (Gino)
Zhang, Renkang (Jackson)
Zhang, Renkang (Jackson)
Zhang, Ziyuan (Elsa)
Zhang, Ziyuan (Elsa)
Zhang, Ziyuan (Elsa)
Zhang, Ziyuan (Elsa)
Zhang, Ziyuan (Elsa)
`;

// Parse the raw data into a structured array
const parseData = (): Student[] => {
  const lines = rawData.split('\n').filter(line => line.trim() !== '');
  const students: Map<string, Student> = new Map();

  lines.forEach(line => {
    // Basic CSV-like parsing: Lastname, Firstname (Nickname)
    const commaIndex = line.indexOf(',');
    if (commaIndex === -1) return; // Skip invalid lines

    const lastName = line.substring(0, commaIndex).trim();
    const rest = line.substring(commaIndex + 1).trim();

    let firstName = rest;
    let nickname: string | null = null;

    const openBracketIndex = rest.indexOf('(');
    const closeBracketIndex = rest.lastIndexOf(')');

    if (openBracketIndex !== -1 && closeBracketIndex !== -1) {
      firstName = rest.substring(0, openBracketIndex).trim();
      nickname = rest.substring(openBracketIndex + 1, closeBracketIndex).trim();
    }

    // Create a unique key to remove duplicates
    const key = `${lastName.toLowerCase()}|${firstName.toLowerCase()}`;
    
    if (!students.has(key)) {
      students.set(key, {
        id: key,
        firstName,
        lastName,
        nickname,
        originalString: line.trim()
      });
    }
  });

  return Array.from(students.values());
};

export const studentData = parseData();
