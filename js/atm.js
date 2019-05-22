var _Atm = (function () {
    var map = null;
    var baseMapUrl = 'http://xdworld.vworld.kr:8080/2d/gray/service/{z}/{x}/{y}.png';

    var dataArr = [
        { name: ['(주)비에스이'], addr: '인천광역시 남동구 남동서로 193', x: '928448.838274891', y: '1934545.4152585235' },
        { name: ['(주)씨에스티'], addr: '인천광역시 남동구 남동대로 248', x: '929162.2536080531', y: '1934468.471045103' },
        { name: ['(주)일야'], addr: '인천광역시 남동구 은봉로 129', x: '929636.4538484735', y: '1934569.642266401' },
        { name: ['CU연수타운점'], addr: '인천광역시 연수구 함박로25번길 22-20', x: '927557.6570542501', y: '1936706.64224092' },
        { name: ['간석드림점G'], addr: '인천광역시 남동구 석산로9번길 69', x: '929139.5206771668', y: '1940818.0201271167' },
        { name: ['고잔엘아이점G'], addr: '인천광역시 남동구 호구포로 50', x: '929252.1022300723', y: '1932524.4912659442' },
        { name: ['고잔중앙점G'], addr: '인천광역시 남동구 앵고개로 712', x: '930676.6785130233', y: '1932416.9426641734' },
        { name: ['남구숭의점G'], addr: '인천광역시 미추홀구 독배로 438', x: '924751.8764202176', y: '1940279.1432027267' },
        { name: ['남동논현점G'], addr: '인천광역시 남동구 앵고개로815번길 20', x: '931356.6721433003', y: '1933189.4978637807' },
        { name: ['남촌중앙점G'], addr: '인천광역시 남동구 남촌로84번길 38-1', x: '930709.9029618322', y: '1936926.6012936095' },
        { name: ['남촌풍림점G'], addr: '인천광역시 남동구 남촌로 87', x: '930519.5241960534', y: '1936924.5501427501' },
        { name: ['논현9단지점G'], addr: '인천광역시 남동구 에코중앙로 96', x: '931082.9144479546', y: '1932299.9763963223' },
        { name: ['논현그린점G'], addr: '인천광역시 남동구 소래역남로 41', x: '932050.8703605854', y: '1933616.1930220574' },
        { name: ['논현논곡점G'], addr: '인천광역시 남동구 은봉로165번길 70', x: '930117.4696603667', y: '1934690.2941433568' },
        { name: ['논현본점G'], addr: '인천광역시 남동구 논현로 107', x: '930811.277431088', y: '1934015.7033148222' },
        { name: ['논현사리울점G'], addr: '인천광역시 남동구 호구포로 294', x: '930380.131301852', y: '1934682.26347306' },
        { name: ['논현타워점G'], addr: '인천광역시 남동구 논고개로 101', x: '931351.6498332566', y: '1933713.8792295498' },
        { name: ['논현푸르내점G'], addr: '인천광역시 남동구 포구로 96', x: '932234.2407277152', y: '1934439.1704077376' },
        { name: ['논현푸르지오점G'], addr: '인천광역시 남동구 남동서로236번길 30', x: '928769.7605027566', y: '1934796.3489991403' },
        { name: ['논현하늘소점G'], addr: '인천광역시 남동구 논현로 17', x: '929976.1893208527', y: '1934125.684656498' },
        { name: ['논현행복점G'], addr: '인천광역시 남동구 논현로 152', x: '931221.0594972067', y: '1934106.1328947735' },
        { name: ['논현현대식자재마트'], addr: '인천광역시 남동구 포구로 69', x: '932397.976608831', y: '1934223.199099741' },
        { name: ['논현호구포점G'], addr: '인천광역시 남동구 호구포로 209', x: '929995.2392286886', y: '1933932.6975875972' },
        { name: ['도림벽산점G'], addr: '인천광역시 남동구 도림로 5-1', x: '931800.7220110968', y: '1935999.2065084004' },
        { name: ['도림아이파크점G'], addr: '인천광역시 남동구 도리미로 8', x: '931913.8111496232', y: '1936148.2539673' },
        { name: ['도화 길목G'], addr: '인천광역시 미추홀구 한나루로586번길 46', x: '926983.470680593', y: '1940180.8585922741' },
        { name: ['도화진주점G'], addr: '인천광역시 미추홀구 석정로323번길 43', x: '926556.1723330859', y: '1941432.2902734857' },
        { name: ['도화팰리스점G'], addr: '인천광역시 미추홀구 경인로 301', x: '926987.0691978035', y: '1940461.0685464954' },
        { name: ['동춘서해점G'], addr: '인천광역시 연수구 봉재산로 20', x: '926197.1109902868', y: '1934885.043063439' },
        { name: ['동춘풍림점G'], addr: '인천광역시 연수구 경원대로119번길 21', x: '926969.1834998771', y: '1933933.1206172006' },
        { name: ['마스터뷰21호점G'], addr: '인천광역시 연수구 컨벤시아대로274번길 55', x: '922947.2055729781', y: '1932085.0274891593' },
        { name: ['만도헬라일렉트로닉스(주)-WOORI'], addr: '인천광역시 연수구 하모니로 224', x: '923721.6646240482', y: '1931399.019956504' },
        { name: ['만수숭의점G'], addr: '인천광역시 남동구 구월말로58번길 1', x: '931460.6338070568', y: '1939723.2555402233' },
        { name: ['주안동궁전예식장 결합부스', '주안으뜸점G'], addr: '인천광역시 미추홀구 주안로 112', x: '927668.7912672199', y: '1940808.841817243' },
        { name: ['무지개할인마트'], addr: '인천광역시 연수구 새말로36번길 11', x: '926976.9262094533', y: '1936160.6680197665' },
        { name: ['미니24-인천'], addr: '인천광역시 미추홀구 경인로 437', x: '928246.1295577467', y: '1940192.399497855' },
        { name: ['미추홀타워점G'], addr: '인천광역시 연수구 갯벌로 12', x: '925064.2345959987', y: '1931830.2383670015' },
        { name: ['보금마트-연수'], addr: '인천광역시 연수구 함박로25번길 2', x: '927463.1199536233', y: '1936627.06679082' },
        { name: ['서구검단고점G'], addr: '인천광역시 서구 검단로 532', x: '926110.4926230235', y: '1956373.3558248538' },
        { name: ['서구엠파크점G'], addr: '인천광역시 서구 염곡로 52', x: '926244.9221541481', y: '1943755.5184864542' },
        { name: ['서구연희점G'], addr: '인천광역시 서구 간촌로 9', x: '927388.9430976734', y: '1950308.0950684836' },
        { name: ['선학역점M'], addr: '인천광역시 연수구 학나래로118번길 23', x: '929081.3471575531', y: '1936767.7973411446' },
        { name: ['선학중앙G'], addr: '인천광역시 연수구 학나래로6번길 32', x: '929030.9872679301', y: '1936439.7252242365' },
        { name: ['세븐일레븐-인천간석역점'], addr: '인천광역시 남동구 석산로 3', x: '928759.3617110967', y: '1940883.321277853' },
        { name: ['셀트리온 제2공장 3층WOORI'], addr: '인천광역시 연수구 아카데미로51번길 20', x: '923862.253035788', y: '1930721.5154832513' },
        { name: ['소래베스트점G'], addr: '인천광역시 남동구 소래역로 20', x: '932409.8016257668', y: '1933619.6491731368' },
        { name: ['소래시티점G'], addr: '인천광역시 남동구 포구로 35', x: '932559.6363396579', y: '1933938.546323114' },
        { name: ['소래중앙점G'], addr: '인천광역시 남동구 소래역로18번길 15', x: '932472.0993263312', y: '1933643.4917039908' },
        { name: ['소래포구점G'], addr: '인천광역시 남동구 장도로 85', x: '932594.8315246161', y: '1933497.9901714372' },
        { name: ['소래풍림점G'], addr: '인천광역시 남동구 포구로 64-29', x: '932494.2900207366', y: '1934308.7269807002' },
        { name: ['송도 라이크홈기숙사-KEB하나'], addr: '인천광역시 연수구 첨단대로 80', x: '925077.5744217939', y: '1930163.4990456211' },
        { name: ['송도그림워크점GSS'], addr: '인천광역시 연수구 아트센터대로97번길 15', x: '923949.5984413391', y: '1933886.2199624083' },
        { name: ['송도더샵엑스포KB'], addr: '인천광역시 연수구 컨벤시아대로42번길 95', x: '924238.7160272836', y: '1934178.4920383645' },
        { name: ['송도더샵점G'], addr: '인천광역시 연수구 아트센터대로97번길 75', x: '924389.3127429485', y: '1933490.9978888235' },
        { name: ['송도라마다점G'], addr: '인천광역시 연수구 능허대로267번길 29', x: '925239.3006682626', y: '1935277.2973558633' },
        { name: ['송도메디점G'], addr: '인천광역시 연수구 컨벤시아대로130번길 14', x: '924308.0890260204', y: '1932993.4899920663' },
        { name: ['송도성지점G'], addr: '인천광역시 연수구 신송로6번길 7', x: '925894.2303461249', y: '1932625.2375938715' },
        { name: ['메리빌리아-송도', '송도트리플점G'], addr: '인천광역시 연수구 송도과학로16번길 33-1', x: '925586.3783327616', y: '1931664.7480640588' },
        { name: ['송도센트럴파크호텔'], addr: '인천광역시 연수구 테크노파크로 193', x: '923641.9774963101', y: '1932732.2588121234' },
        { name: ['송도스마트밸리점G'], addr: '인천광역시 연수구 송도미래로 30', x: '924568.090254779', y: '1930236.501307576' },
        { name: ['송도월드마크점M'], addr: '인천광역시 연수구 컨벤시아대로 60', x: '924851.1126633752', y: '1933442.4269422777' },
        { name: ['송도유원지점G'], addr: '인천광역시 연수구 능허대로 203', x: '924862.0970530566', y: '1935734.32011165' },
        { name: ['송도점-GSS'], addr: '인천광역시 연수구 해돋이로 107', x: '924778.2391112824', y: '1932822.1059526857' },
        { name: ['송도커넬워크점G'], addr: '인천광역시 연수구 아트센터대로 107', x: '923751.8781831791', y: '1933894.0553808152' },
        { name: ['송도테크노파크IT센터SHINHAN'], addr: '인천광역시 연수구 송도과학로 32', x: '925841.3207283262', y: '1931743.5380926528' },
        { name: ['송도파크호텔WOORI'], addr: '인천광역시 연수구 테크노파크로 151', x: '923940.5490371233', y: '1932461.3960087532' },
        { name: ['인천글로벌운영재단', '한국뉴욕주립대학교 결합부스'], addr: '인천광역시 연수구 송도문화로 119', x: '926175.2482764572', y: '1930840.0637925412' },
        { name: ['송도하모니점G'], addr: '인천광역시 연수구 하모니로 124', x: '924325.4107504063', y: '1932184.2251096321' },
        { name: ['송도해송점G'], addr: '인천광역시 연수구 해송로30번길 19', x: '924385.1257843729', y: '1931691.8597509419' },
        { name: ['송도현대점G'], addr: '인천광역시 연수구 해돋이로6번길 7', x: '925627.0584128611', y: '1932281.0568902749' },
        { name: ['송도힐스점G'], addr: '인천광역시 연수구 컨벤시아대로 90', x: '924647.7513800692', y: '1933202.8066080627' },
        { name: ['숭의길목점G'], addr: '인천광역시 미추홀구 수봉안길 16', x: '925635.7302395517', y: '1940618.206504576' },
        { name: ['시흥신창점G'], addr: '경기도 시흥시 신천4길 12', x: '936418.8711248166', y: '1937926.4969950966' },
        { name: ['신기사거리점G'], addr: '인천광역시 미추홀구 미추홀대로 610', x: '927475.7843919608', y: '1939483.3085580925' },
        { name: ['신천동국민은행 결합부스'], addr: '경기도 시흥시 수인로 3372', x: '936693.2910999567', y: '1938235.12572021' },
        { name: ['아크리아점G'], addr: '인천광역시 연수구 신송로125번길 13', x: '924866.6899020134', y: '1933167.18251291' },
        { name: ['엠파크타워점G'], addr: '인천광역시 서구 봉수대로 158', x: '925983.41854599', y: '1943696.0707750432' },
        { name: ['연수경원G'], addr: '인천광역시 연수구 경원대로467번길 13', x: '929009.7022006633', y: '1936610.8085542968' },
        { name: ['연수골드점G'], addr: '인천광역시 연수구 함박로 80', x: '927980.0656931633', y: '1936544.17710579' },
        { name: ['연수단비점G'], addr: '인천광역시 연수구 청능대로113번길 43', x: '927274.7641431501', y: '1935327.7588821636' },
        { name: ['연수선학점G'], addr: '인천광역시 연수구 넘말로29번길 21', x: '928915.90151959', y: '1936891.1488486365' },
        { name: ['연수장례식장 인천내부'], addr: '인천광역시 연수구 벚꽃로 122', x: '927335.7894045769', y: '1935611.3385808035' },
        { name: ['연수점G'], addr: '인천광역시 연수구 새말로46번길 4', x: '927054.4397459901', y: '1936127.9562478536' },
        { name: ['연수점M'], addr: '인천광역시 연수구 비류대로 230', x: '925700.9976564867', y: '1936753.3900593636' },
        { name: ['연수중앙점G'], addr: '인천광역시 연수구 새말로69번길 1', x: '927230.4884649334', y: '1935967.4642858398' },
        { name: ['연수청학점M'], addr: '인천광역시 연수구 먼우금로 197', x: '927097.7779245968', y: '1935413.5243354505' },
        { name: ['연수타운점G'], addr: '인천광역시 연수구 샘말로21번길 3', x: '927277.5510110233', y: '1935141.1890938403' },
        { name: ['연수태산점G'], addr: '인천광역시 연수구 먼우금로264번길 8-4', x: '927477.3679526933', y: '1935944.299351547' },
        { name: ['연수파크타운점M'], addr: '인천광역시 연수구 용담로 115', x: '927244.231129833', y: '1935426.1714365287' },
        { name: ['연수함박점M'], addr: '인천광역시 연수구 함박뫼로50번길 93', x: '927263.5188448408', y: '1935872.3548643487' },
        { name: ['연수희망점G'], addr: '인천광역시 연수구 앵고개로 256', x: '926724.2878851034', y: '1934622.8657452334' },
        { name: ['영빌딩CITY'], addr: '인천광역시 미추홀구 인하로 253', x: '927138.1700531407', y: '1939133.3534303224' },
        { name: ['옥련백산점G'], addr: '인천광역시 연수구 독배로 25', x: '924316.71718126', y: '1936330.9110739832' },
        { name: ['옥련사거리G'], addr: '인천광역시 연수구 독배로 68', x: '924367.6668144872', y: '1936729.1735826507' },
        { name: ['옥련사랑M'], addr: '인천광역시 연수구 한나루로 166', x: '925293.9163142969', y: '1936455.0597683867' },
        { name: ['옥련서해점G'], addr: '인천광역시 연수구 청량로185번길 13', x: '924973.1474770068', y: '1936336.0367916236' },
        { name: ['옥련쌍용G'], addr: '인천광역시 연수구 청량로184번길 48', x: '925182.9532054849', y: '1936549.0084032882' },
        { name: ['옥련아주점G'], addr: '인천광역시 연수구 청량로 217', x: '925018.4765206832', y: '1936665.1654121173' },
        { name: ['옥련우성점G'], addr: '인천광역시 연수구 독배로40번길 47', x: '924577.7008813033', y: '1936507.4463419202' },
        { name: ['옥련풍림점G'], addr: '인천광역시 연수구 한나루로193번길 3', x: '925362.11812462', y: '1936699.7315103933' },
        { name: ['월미분수대점G'], addr: '인천광역시 중구 월미문화로 57', x: '920135.501782795', y: '1941955.847831308' },
        { name: ['월미중앙점G'], addr: '인천광역시 중구 월미문화로 65', x: '920108.2432266385', y: '1941888.865706168' },
        { name: ['위드미-라마다송도점'], addr: '인천광역시 연수구 능허대로267번길 42', x: '925310.3928309134', y: '1935295.212755117' },
        { name: ['유진로봇 송도사옥'], addr: '인천광역시 연수구 하모니로187번길 33', x: '924180.5928355344', y: '1931340.6668476937' },
        { name: ['은계센트럴점G'], addr: '경기도 시흥시 은계중앙로 97', x: '938203.4013041602', y: '1938022.7406927734' },
        { name: ['은행동성원아파트 결합부스'], addr: '경기도 시흥시 은행로149번길 1', x: '938028.694184585', y: '1938571.9840112804' },
        { name: ['은행동약사 결합부스'], addr: '경기도 시흥시 은행로 8', x: '937498.2971942425', y: '1937334.1604390284' },
        { name: ['은혜의교회SH'], addr: '인천광역시 미추홀구 매소홀로 428', x: '926520.0805420987', y: '1938134.7043078174' },
        { name: ['이마트 동인천점SC'], addr: '인천광역시 중구 인중로 134', x: '922988.2656142102', y: '1941172.2637899336' },
        { name: ['이마트24 연수함박로'], addr: '인천광역시 연수구 함박로 36', x: '927543.317565355', y: '1936592.6575228586' },
        { name: ['이수엑사보드 인천공장'], addr: '인천광역시 남동구 남동서로270번길 54', x: '929093.4386579194', y: '1935045.5201349352' },
        { name: ['인천 송도 컨벤시아'], addr: '인천광역시 연수구 센트럴로 123', x: '924456.9867797431', y: '1932661.4434322082' },
        { name: ['인천5공단파출소결합부스'], addr: '인천광역시 서구 가재울로 75', x: '927648.8596204547', y: '1942435.9377577854' },
        { name: ['인천경동점G'], addr: '인천광역시 중구 개항로 82', x: '923229.7654404601', y: '1941739.1997609003' },
        { name: ['송도 에듀포레푸르지오', '에듀포레점G'], addr: '인천광역시 연수구 송도문화로84번길 24', x: '925676.0507520717', y: '1930863.955523713' },
        { name: ['인천남촌로점G'], addr: '인천광역시 남동구 남촌동로3번길 33', x: '930644.9199876767', y: '1937177.0833667233' },
        { name: ['인천논현광장점G'], addr: '인천광역시 남동구 논고개로123번길 35', x: '931147.5988134101', y: '1933884.31215839' },
        { name: ['인천논현사랑점G'], addr: '인천광역시 남동구 논고개로 166', x: '931299.0037734902', y: '1934371.8316615' },
        { name: ['인천논현역점G'], addr: '인천광역시 남동구 논고개로 121', x: '931299.4091969267', y: '1933928.8000814402' },
        { name: ['인천논현점M'], addr: '인천광역시 남동구 논현로46번길 51', x: '930040.7558424668', y: '1933792.9459385104' },
        { name: ['인천동아서점 결합부스'], addr: '인천광역시 미추홀구 경인로 386-1', x: '927733.8360022209', y: '1940187.0715722647' },
        { name: ['인천메카점M'], addr: '인천광역시 연수구 용담로125번길 41', x: '927422.4468487434', y: '1935499.65872847' },
        { name: ['인천벽산아파트 결합부스'], addr: '인천광역시 남동구 서판로 43', x: '931434.1630260036', y: '1940841.3205330772' },
        { name: ['인천선학점G'], addr: '인천광역시 연수구 비류대로529번길 10', x: '928643.5051002635', y: '1936354.497053353' },
        { name: ['인천송도점G'], addr: '인천광역시 연수구 해돋이로84번길 29', x: '925166.2389731444', y: '1932929.6578389006' },
        { name: ['인천신현쇼핑 결합부스'], addr: '인천광역시 서구 가정로 369', x: '926879.0843732902', y: '1946840.1810874036' },
        { name: ['인천옥련점M'], addr: '인천광역시 연수구 한나루로197번길 30', x: '925282.19116041', y: '1936827.8251766833' },
        { name: ['인천주안로점G'], addr: '인천광역시 미추홀구 주안동로 28-15', x: '928043.4087397007', y: '1940464.958479995' },
        { name: ['인천터미널점M'], addr: '인천광역시 남동구 인하로 497-28', x: '929468.6800886367', y: '1938695.6430360102' },
        { name: ['인천해양경찰서-SH'], addr: '인천광역시 연수구 옥골로 69', x: '924748.3864360615', y: '1937246.7582861618' },
        { name: ['인천호구포역점M'], addr: '인천광역시 남동구 논현로26번길 12', x: '929979.51652928', y: '1934015.4848348568' },
        { name: ['자매슈퍼-연수'], addr: '인천광역시 연수구 함박로12번길 46', x: '927560.5282932345', y: '1936553.2454770715' },
        { name: ['제물포버스정류장 결합부스'], addr: '인천광역시 미추홀구 경인로 135', x: '925542.174751237', y: '1941140.5618504882' },
        { name: ['제일슈퍼-인천'], addr: '인천광역시 연수구 함박안로156번길 6', x: '927773.0413744', y: '1936723.1742538' },
        { name: ['주안 보보G'], addr: '인천광역시 미추홀구 경인로425번길 14', x: '928155.8178139064', y: '1940251.613382046' },
        { name: ['주안 신성G'], addr: '인천광역시 미추홀구 주안중로 28', x: '927733.3861476094', y: '1940496.9830620233' },
        { name: ['주안1동점G'], addr: '인천광역시 미추홀구 주안중로50번길 20', x: '927832.11701282', y: '1940714.3422219716' },
        { name: ['주안공단점G'], addr: '인천광역시 미추홀구 염전로 362', x: '927504.3446300412', y: '1941528.745698372' },
        { name: ['주안남부점M'], addr: '인천광역시 미추홀구 주안로104번길 15', x: '927600.294782457', y: '1940748.241028722' },
        { name: ['주안대로점G'], addr: '인천광역시 미추홀구 주안로 45', x: '927021.73843505', y: '1940904.6652424666' },
        { name: ['주안동경점G'], addr: '인천광역시 미추홀구 주안서로 53', x: '927285.2900126814', y: '1940792.0053177588' },
        { name: ['주안미래점M'], addr: '인천광역시 미추홀구 주안중로 13-1', x: '927698.3542673178', y: '1940367.9314235584' },
        { name: ['주안미소점G'], addr: '인천광역시 미추홀구 신기길30번길 37', x: '926981.776154774', y: '1938935.675808793' },
        { name: ['주안미추홀점G'], addr: '인천광역시 미추홀구 경인로 343', x: '927260.9079237133', y: '1940267.6733396333' },
        { name: ['주안본점M'], addr: '인천광역시 미추홀구 미추홀대로734번길 37', x: '927714.5775235672', y: '1940744.2295416128' },
        { name: ['주안사거리점G'], addr: '인천광역시 미추홀구 석바위로 61', x: '927476.9399430258', y: '1940520.5633123717' },
        { name: ['주안석바위점M'], addr: '인천광역시 미추홀구 석바위로 112', x: '927947.6847094274', y: '1940400.324138321' },
        { name: ['주안세일점G'], addr: '인천광역시 미추홀구 동주길 76', x: '927911.4083549832', y: '1939815.436123129' },
        { name: ['주안역삼거리 결합부스'], addr: '인천광역시 미추홀구 미추홀대로 741', x: '927492.7927790079', y: '1940802.0347208697' },
        { name: ['주안월드점G'], addr: '인천광역시 미추홀구 경인로485번길 33', x: '928577.0918325363', y: '1940491.9788272986' },
        { name: ['송도센트럴점M', '송도푸르지오시티점G'], addr: '인천광역시 연수구 아트센터대로 203', x: '923106.4381077425', y: '1933254.1090356754' },
        { name: ['주안주공점G'], addr: '인천광역시 미추홀구 주안로 215', x: '928700.075495082', y: '1940788.8228662973' },
        { name: ['주안파크점G'], addr: '인천광역시 미추홀구 미추홀대로722번길 21-1', x: '927631.6564081493', y: '1940615.9256797591' },
        { name: ['주안한신점G'], addr: '인천광역시 미추홀구 인하로352번길 10', x: '928112.3556398968', y: '1939019.7543626092' },
        { name: ['주안행복점M'], addr: '인천광역시 미추홀구 석바위로53번길 3', x: '927366.0847729146', y: '1940514.0627141502' },
        { name: ['중부지방해양경찰청SH'], addr: '인천광역시 연수구 센트럴로 263', x: '923373.8316200967', y: '1933570.7668816056' },
        { name: ['중앙슈퍼-연수'], addr: '인천광역시 연수구 함박뫼로4번길 13-8', x: '926743.3556705897', y: '1935757.611946192' },
        { name: ['천일식품-고잔동'], addr: '인천광역시 남동구 앵고개로 426', x: '928102.1321792866', y: '1933636.4756072024' },
        { name: ['청능공원점G'], addr: '인천광역시 연수구 청능말로7번길 20', x: '926506.0746164669', y: '1935665.4340851936' },
        { name: ['청라리치아노점M'], addr: '인천광역시 서구 청라에메랄드로102번길 10', x: '925562.0452141722', y: '1948624.1122872476' },
        { name: ['청라에뜰점G'], addr: '인천광역시 서구 청라커낼로 300', x: '924457.963117328', y: '1948765.6387663502' },
        { name: ['청라호반점G'], addr: '인천광역시 서구 청라커낼로 163', x: '923949.8371560569', y: '1947760.2909392407' },
        { name: ['청학복합문화센터-SHINHAN'], addr: '인천광역시 연수구 비류대로 299', x: '926357.2427523071', y: '1936675.620955735' },
        { name: ['청학본점G'], addr: '인천광역시 연수구 비류대로278번길 8-3', x: '926142.2991103267', y: '1936646.2066965867' },
        { name: ['청학타운점G'], addr: '인천광역시 연수구 청학로12번길 47', x: '926231.6395880934', y: '1936834.2690070835' },
        { name: ['청학현대점G'], addr: '인천광역시 연수구 계림로35번길 58', x: '926443.0193460134', y: '1936904.7241967367' },
        { name: ['코스트코'], addr: '인천광역시 연수구 컨벤시아대로230번길 60', x: ' 923278.7832623338', y: '1932636.7317621163' },
        { name: ['퍼스트파크13점'], addr: '인천광역시 연수구 컨벤시아대로252번길 70', x: '923074.6219626968', y: '1932451.7707887636' },
        { name: ['포스코송도 R&D센터KB'], addr: '인천광역시 연수구 송도과학로 100', x: '926384.4323779428', y: '1931453.2860596376' },
        { name: ['포스코이앤씨타워점G'], addr: '인천광역시 연수구 인천타워대로 241', x: '923372.5008990793', y: '1932935.9711958324' },
        { name: ['하이-소래포구'], addr: '인천광역시 남동구 포구로 3', x: '932688.4409603968', y: '1933646.0883224965' },
        { name: ['학익늘봄점G'], addr: '인천광역시 미추홀구 한나루로403번길 105', x: '925632.7361822787', y: '1938795.12119258' },
        { name: ['학익다송G'], addr: '인천광역시 미추홀구 소성로 162', x: '926243.6841133314', y: '1938404.1977886255' },
        { name: ['학익대로점G'], addr: '인천광역시 미추홀구 소성로 244', x: '926977.6259435453', y: '1938038.3710919674' },
        { name: ['학익미소G'], addr: '인천광역시 미추홀구 주승로 22', x: '926826.3832888785', y: '1938596.312287895' },
        { name: ['학익사거리점M'], addr: '인천광역시 미추홀구 매소홀로446번길 16', x: '926687.5525610019', y: '1938078.4112452823' },
        { name: ['학익센터점G'], addr: '인천광역시 미추홀구 매소홀로446번길 4', x: '926688.1271994561', y: '1938129.2821605182' },
        { name: ['학익점GSS'], addr: '인천광역시 미추홀구 소성로 146', x: '926064.1264832243', y: '1938437.8886083513' },
        { name: ['학익중앙점G'], addr: '인천광역시 미추홀구 소성로185번길 16-5', x: '926531.8325332045', y: '1938402.6683132658' },
        { name: ['학익타운점G'], addr: '인천광역시 미추홀구 한나루로 350', x: '925893.6336379224', y: '1938132.127089256' },
        { name: ['한옥마을앰배서더-SHINHAN'], addr: '인천광역시 연수구 테크노파크로 200', x: '923643.9542986592', y: '1932798.2731926683' },
        { name: ['한화프라자점G'], addr: '인천광역시 남동구 소래역남로 12', x: '932305.6277828533', y: '1933461.700828867' },
        { name: ['해양경비안전본부SHINHAN'], addr: '인천광역시 연수구 해돋이로 130', x: '924618.4617833635', y: '1932985.3575826176' },
        { name: ['현대 프리미엄 아울렛 송도'], addr: '인천광역시 연수구 송도국제대로 123', x: '925450.1762407259', y: '1931726.6847481355' }
    ];

    var searchName = function (name) {
        for (var i = 0; i < dataArr.length; i++) {
            if (dataArr[i].name.indexOf(name) > -1) {
                map.getView().setCenter(transformPoint(dataArr[i].x, dataArr[i].y));
                map.getView().setZoom(16);
            };
        }
    };

    var setList = function () {
        var html = '';
        var arr = [];
        for (var i = 0; i < dataArr.length; i++) {
            for (var j = 0; j < dataArr[i].name.length; j++) {
                arr.push(dataArr[i].name[j]);
            }
        }
        arr.sort();

        for (var i = 0; i < arr.length; i++) {
            html += '<option value="' + arr[i] + '">' + arr[i] + '</option>';
        }

        $('#searchName').html(html);
    };

    var createMap = function (id) {
        var mapLayers = [];

        mapLayers[0] = (createVWorldMapLayer({
            isVisible: true
        }));

        map = new ol.Map({
            controls: ol.control.defaults({
                attribution: false,
                rotate: false,
                zoom: false,
                forEachLayerAtPixel: true
            }).extend([new ol.interaction.DragRotate({
                condition: function (e) {
                    return false;
                }
            })]),
            target: id,
            layers: mapLayers,
            view: new ol.View({
                enableRotation: false,
                rotation: 0,
                center: [14099330.817812243, 4500407.503618384],
                minZoom: 7,
                maxZoom: 19,
                zoom: 11
            })
        });

        writeLayer();
    };

    var createVWorldMapLayer = function (options) {

        return new ol.layer.Tile({
            source: new ol.source.XYZ({
                tileSize: 256,
                url: baseMapUrl,
                projection: 'EPSG:3857'
            }),
            extend: [50119.84, 967246.47, 2176674.68, 12765761.31],
            name: options.name != null ? options.name : 'Gray',
            group: options.group != null ? options.group : 'GrayMap',
            visible: options.isVisible != null ? options.isVisible : false
        });
    };

    var transformPoint = function (x, y) {
        proj4.defs('EPSG:5179', '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs');

        var ep1 = new proj4.Proj('EPSG:5179');
        var ep2 = new proj4.Proj('EPSG:3857');
        var p = new proj4.Point(parseFloat(x), parseFloat(y));
        var trans = proj4.transform(ep1, ep2, p);

        return [trans.x, trans.y];
    }
    var writeLayer = function () {
        var pointArray = [];
        var source;

        for (var i = 0; i < dataArr.length; i++) {

            var feature = new ol.Feature();
            feature.setGeometry(new ol.geom.Point(transformPoint(dataArr[i].x, dataArr[i].y)));
            feature.setProperties(dataArr[i]);
            pointArray.push(feature);
        }

        source = new ol.source.Vector({
            features: pointArray
        });

        var vectorLayer = new ol.layer.Vector({
            source: source,
            id: 'atmLayer',
            zIndex: 2,
            visible: true,
            style: function (feature) {
                var prop = feature.getProperties();
                var style = [];
                for (var i = 0; i < prop.name.length; i++) {
                    //prop.name[i];
                    var st;
                    if (i == 0) {
                        st = new ol.style.Style({
                            geometry: feature.getGeometry(),
                            image: new ol.style.Circle({
                                radius: 7,
                                fill: new ol.style.Fill({
                                    color: 'red'
                                }),
                                stroke: new ol.style.Stroke({
                                    color: '#AFABAB',
                                    width: 3
                                })
                            }),
                            text: new ol.style.Text({
                                text: prop.name[i],
                                fill: new ol.style.Fill({
                                    color: '#007cf4'
                                }),
                                offsetY: 20,
                                font: 'bold 12px Arial',
                                stroke: new ol.style.Stroke({
                                    color: '#fff',
                                    width: 2
                                })
                            })
                        });
                    } else {
                        st = new ol.style.Style({
                            geometry: feature.getGeometry(),
                            text: new ol.style.Text({
                                text: prop.name[i],
                                fill: new ol.style.Fill({
                                    color: '#007cf4'
                                }),
                                offsetY: 35,
                                font: 'bold 12px Arial',
                                stroke: new ol.style.Stroke({
                                    color: '#fff',
                                    width: 2
                                })
                            })
                        });
                    }

                    style.push(st);
                }

                return style;
            }
        });

        map.addLayer(vectorLayer);
    };

    var setEvent = function () {
        $('#searchName').off('change').on('change', function () {
            searchName($(this).val());
        })
    };

    return {
        init: function () {
            createMap('mapDiv');
            setList();
            setEvent();
        },
        getMap: function () {
            return map;
        }
    };
})();