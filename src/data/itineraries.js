const itineraries = [
    {
        id: '0525',
        dateParts: ['5', '月', '25', '日'],
        coverImage: '/images/0525.jpg',
        summary: '維多利亞市場、唐人街與皇家拱廊',
        title: '墨爾本市區經典散步日',
        description: '第一天以步行為主，漫遊墨爾本市中心最具代表性的地標。我們將從充滿歷史感的弗林德街車站出發，走訪聖保羅大教堂與涂鴉藝術聞名的霍西爾巷。接著探訪皇家拱廊與維多利亞市場，享受在地小吃與購物體驗。午後則沿著雅拉河岸散步至植物園，感受都市與自然的平衡。',
        gallery: [
          { image: '/images/0525_1.jpg', caption: '墨爾本州立圖書館' },
          { image: '/images/0525_2.jpg', caption: '霍西爾塗鴉街' },
          { image: '/images/0525_3.jpg', caption: '聖保羅大教堂' },
          { image: '/images/0525_4.jpg', caption: '弗林德街車站' }
        ],
    },
    {
        id: '0526',
        dateParts: ['5', '月', '26', '日'],
        coverImage: '/images/0526.jpg',
        summary: '走訪丹頓農山與觀賞企鵝歸巢',
        title: '丹頓農＆菲利普島之旅',
        description: '這天將從城市出發，自駕前往位於山區的丹頓農森林。上午搭乘知名的普分比利蒸氣火車，體驗懷舊旅程與大自然的氣息。下午轉往海邊的菲利普島，觀賞可愛的企鵝歸巢奇景。整日橫跨山林與海岸，是結合懷舊與野生動物觀察的絕佳行程安排。',
        gallery: [
          { image: '/images/0526_1.jpg', caption: '丹頓農森林步道' },
          { image: '/images/0526_2.jpg', caption: '普分比利蒸汽小火車' },
          { image: '/images/0526_3.jpg', caption: '諾比斯角' },
          { image: '/images/0526_4.jpg', caption: '菲利普島企鵝' },
          { image: '/images/0526_5.jpg', caption: '企鵝觀賞平台' }
        ]
    },
    {
        id: '0527',
        dateParts: ['5', '月', '27', '日'],
        coverImage: '/images/0527.jpg',
        summary: '復古金礦鎮探險與歷史體驗',
        title: 'Ballarat 一日遊',
        description: '這天我們將踏上歷史之旅，前往維多利亞時代的淘金小鎮 Ballarat，深入 Sovereign Hill 探索 1850 年代的掏金熱潮。換上復古服裝、參加淘金體驗與舊時代表演，走在石子路與仿古建築間，如同穿越時光。是一趟適合拍照與深度文化體驗的旅程。',
        gallery: [
          { image: '/images/0527_1.jpg', caption: '巴拉瑞特掏金鎮' },
          { image: '/images/0527_2.jpg', caption: '掏金鎮體驗活動' },
          { image: '/images/0527_3.jpg', caption: '走進復古小鎮' },
          { image: '/images/0527_4.jpg', caption: '探索小鎮風情' }
        ]
    },
    {
        id: '0528',
        dateParts: ['5', '月', '28', '日'],
        coverImage: '/images/0528.jpg',
        summary: '沿海經典小鎮與壯麗海岸',
        title: '大洋路 Day 1',
        description: '自駕踏上澳洲最美的濱海公路之一——大洋路。這一天從 Geelong 出發，途經 Torquay 與 Bells Beach，感受衝浪文化與開闊海景。中途在 Lorne 小鎮享用午餐，最後抵達充滿悠閒氣息的 Apollo Bay。沿路風景壯麗，適合停留拍照，是享受海岸風情的經典路線。',
        gallery: [
          { image: '/images/0528_1.jpg', caption: '吉朗小鎮' },
          { image: '/images/0528_2.jpg', caption: '沿海公路' },
          { image: '/images/0528_3.jpg', caption: '托爾坎海港' },
          { image: '/images/0528_4.jpg', caption: '阿波羅灣' }
        ]
    },
    {
        id: '0529',
        dateParts: ['5', '月', '29', '日'],
        coverImage: '/images/0529.jpg',
        summary: '十二門徒岩 峽灣奇景',
        title: '大洋路 Day 2',
        description: '大洋路旅程進入最精華的第二天，清晨出發前往著名的十二門徒岩與 Gibson Steps，感受大自然雕刻的壯麗海蝕地形。之後探索 Loch Ard Gorge 等奇景，並在 Port Campbell 享用午餐。午後走內陸公路返回墨爾本，是結束濱海之旅的完美收尾。',
        gallery: [
          { image: '/images/0529_1.jpg', caption: '十二門徒岩' },
          { image: '/images/0529_2.jpg', caption: '倫敦橋' },
          { image: '/images/0529_3.jpg', caption: '峽灣奇景' },
          { image: '/images/0529_4.jpg', caption: '大洋路美景' }
        ]
    },
    {
        id: '0530',
        dateParts: ['5', '月', '30', '日'],
        coverImage: '/images/0530.jpg',
        summary: '紅衫樹林 小鎮漫步',
        title: 'Warburton 童話小鎮',
        description: '最後一天安排輕鬆自在的山林小鎮散步。前往被森林與溪流環繞的 Warburton，走吊橋、走河岸步道、拍攝紅杉林與小木屋風景。適合放慢腳步、靜靜感受大自然的美好。享用在地餐廳午餐後悠閒返程，為整趟旅程劃下平靜的句點。',
        gallery: [
          { image: '/images/0530_1.jpg', caption: '森林步道' },
          { image: '/images/0530_2.jpg', caption: '紅衫林' },
          { image: '/images/0530_3.jpg', caption: '林中吊橋' }
        ]
    }
]

export default itineraries