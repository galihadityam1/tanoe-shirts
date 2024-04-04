const { db } = require('./mongo');

const users = [
  {
      "name": "DTD Flannel Short Sleeve - Day 077",
      "slug": "dtd-flannel-short-sleeve-day-077",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024165_1_b77d99ab-9bd7-49d1-9989-b99ce76ac70c.jpg?v=1710324581&width=1400",
      "price": 200000,
      "disc": 150000,
      "description": "Kemeja flanel dengan lengan pendek ini merupakan pilihan yang nyaman untuk gaya santai sehari-hari. Terbuat dari bahan berkualitas tinggi yang memberikan kehangatan dan kenyamanan. Cocok dipadukan dengan celana jeans atau celana pendek favorit Anda.",
      "excerpt": "Kemeja flanel lengan pendek untuk gaya santai sehari-hari.",
      "tags": [],
      "stok": 15
  },
  {
      "name": "DTD Flannel Long Sleeve - Day 079",
      "slug": "dtd-flannel-long-sleeve-day-079",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDACMT022024167_1_6645986b-e369-4860-9c8f-91e6872b474e.jpg?v=1710403336&width=1400",
      "price": 250000,
      "disc": 200000,
      "description": "Kemeja flanel panjang yang nyaman dipakai sepanjang hari. Terbuat dari bahan berkualitas tinggi yang lembut dan hangat. Desain yang trendi dan cocok dipadukan dengan celana jeans atau celana panjang favorit Anda.",
      "excerpt": "Kemeja flanel panjang yang nyaman dipakai sepanjang hari.",
      "tags": [],
      "stok": 10
  },
  {
      "name": "DTD Flannel Long Sleeve - Day 068",
      "slug": "dtd-flannel-long-sleeve-day-068",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDACMT022024130_1_23ef0a24-70ad-4366-b193-2c4256ffaf88.jpg?v=1710403277&width=1400",
      "price": 220000,
      "disc": 180000,
      "description": "Kemeja flanel panjang dengan desain yang menarik dan nyaman dipakai sepanjang hari. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk digunakan dalam berbagai kesempatan.",
      "excerpt": "Kemeja flanel panjang dengan desain menarik.",
      "tags": [],
      "stok": 20
  },
  {
      "name": "DTD Flannel Long Sleeve - Day 067",
      "slug": "dtd-flannel-long-sleeve-day-067",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024129_1_1e2ec8e3-5294-447f-88e0-e4ba9d0aeeaf.jpg?v=1710324559&width=1400",
      "price": 280000,
      "disc": 240000,
      "description": "Kemeja flanel panjang dengan motif yang unik dan modern. Terbuat dari bahan berkualitas tinggi yang nyaman dipakai sepanjang hari. Cocok untuk gaya santai maupun formal.",
      "excerpt": "Kemeja flanel panjang dengan motif unik dan modern.",
      "tags": [],
      "stok": 18
  },
  {
      "name": "DTD Flannel Long Sleeve - Day 066",
      "slug": "dtd-flannel-long-sleeve-day-067",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDACMT022024128_1_dffaab2c-fb06-4cf5-9314-db31561490c2.jpg?v=1710403238&width=1400",
      "price": 270000,
      "disc": 230000,
      "description": "Kemeja flanel panjang dengan potongan yang modern dan nyaman dipakai sepanjang hari. Terbuat dari bahan berkualitas tinggi yang tahan lama. Cocok untuk berbagai kesempatan.",
      "excerpt": "Kemeja flanel panjang dengan potongan modern.",
      "tags": [],
      "stok": 14
  },
  {
      "name": "DTD Flannel Long Sleeve - Day 061",
      "slug": "dtd-flannel-long-sleeve-day-061",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDACMT022024123_1_e23f9ef7-edc1-498d-86d4-cac87d1aecf8.jpg?v=1710403183&width=1400",
      "price": 290000,
      "disc": 250000,
      "description": "Kemeja flanel panjang dengan desain klasik yang tetap modern. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk digunakan dalam berbagai kesempatan.",
      "excerpt": "Kemeja flanel panjang dengan desain klasik yang tetap modern.",
      "tags": [],
      "stok": 12
  },
  {
      "name": "DTD Flannel Short Sleeve - Day 059",
      "slug": "dtd-flannel-long-sleeve-day-059",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024122_1_2a759ea6-5012-4e9b-8669-e88185720550.jpg?v=1710324539&width=1400",
      "price": 210000,
      "disc": 160000,
      "description": "Kemeja flanel dengan lengan pendek yang nyaman dipakai sepanjang hari. Terbuat dari bahan berkualitas tinggi yang memberikan kehangatan dan kenyamanan. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Kemeja flanel lengan pendek yang nyaman dipakai.",
      "tags": [],
      "stok": 16
  },
  {
      "name": "DTD Flannel Short Sleeve - Day 058",
      "slug": "dtd-flannel-long-sleeve-day-058",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024120_1_a91350b2-492c-4cd8-84bf-1635d200007a.jpg?v=1710324527&width=1400",
      "price": 260000,
      "disc": 220000,
      "description": "Kemeja flanel dengan lengan pendek yang memiliki desain yang menarik dan unik. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai sehari-hari.",
      "excerpt": "Kemeja flanel lengan pendek dengan desain menarik.",
      "tags": [],
      "stok": 19
  },
  {
      "name": "DTD Flannel Short Sleeve - Day 057",
      "slug": "dtd-flannel-long-sleeve-day-057",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDACMT022024119_1_bc4374da-2e1a-4515-bbfc-eda2d81bda44.jpg?v=1710403129&width=1400",
      "price": 230000,
      "disc": 190000,
      "description": "Kemeja flanel dengan lengan pendek yang nyaman dipakai sepanjang hari. Terbuat dari bahan berkualitas tinggi yang memberikan kehangatan dan kenyamanan. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Kemeja flanel lengan pendek yang nyaman dipakai.",
      "tags": [],
      "stok": 17
  },
  {
      "name": "DTD Flannel Short Sleeve - Day 056",
      "slug": "dtd-flannel-long-sleeve-day-056",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDACMT022024118_1_009f38c2-41aa-4fba-8cc0-ed1f5c8f7472.jpg?v=1710403001&width=1400",
      "price": 270000,
      "disc": 230000,
      "description": "Kemeja flanel dengan lengan pendek yang memiliki desain yang menarik dan unik. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai sehari-hari.",
      "excerpt": "Kemeja flanel lengan pendek dengan desain menarik.",
      "tags": [],
      "stok": 13
  },
  {
      "name": "DTD Flannel Short Sleeve - Day 054",
      "slug": "dtd-flannel-long-sleeve-day-054",
      "category": "flannel",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024116_1_dfafec6b-6f9a-4cf6-8c6c-acb0ff72ce5e.jpg?v=1710324504&width=1400",
      "price": 240000,
      "disc": 200000,
      "description": "Kemeja flanel dengan lengan pendek yang nyaman dipakai sepanjang hari. Terbuat dari bahan berkualitas tinggi yang memberikan kehangatan dan kenyamanan. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Kemeja flanel lengan pendek yang nyaman dipakai.",
      "tags": [],
      "stok": 11
  },
  {
      "name": "Multicolor Polo - Navy",
      "slug": "multicolor-polo-navy",
      "category": "polo",
      "sleeve": "short",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDA_telkomsel4_1.jpg?v=1706095121&width=1400",
      "price": 150000,
      "disc": 100000,
      "description": "Polo shirt multicolor dengan lengan pendek yang nyaman dan stylish. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Polo shirt multicolor dengan lengan pendek.",
      "tags": [],
      "stok": 20
  },
  {
      "name": "Multicolor Polo - Maroon",
      "slug": "multicolor-polo-maroon",
      "category": "polo",
      "sleeve": "short",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDA_telkomsel3_1.jpg?v=1706095109&width=1400",
      "price": 180000,
      "disc": 130000,
      "description": "Polo shirt multicolor dengan lengan pendek yang nyaman dan stylish. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Polo shirt multicolor dengan lengan pendek.",
      "tags": [],
      "stok": 15
  },
  {
      "name": "French Ivy Polo Short Sleeve - Navy",
      "slug": "french-ivy-polo-short-sleeve-navy",
      "category": "polo",
      "sleeve": "short",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDA072023-047_01_80f0d79e-1b2a-4d48-8211-afda210251b7.jpg?v=1695223248&width=1400",
      "price": 190000,
      "disc": 140000,
      "description": "Polo shirt French Ivy dengan lengan pendek yang nyaman dan stylish. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Polo shirt French Ivy dengan lengan pendek.",
      "tags": [],
      "stok": 7
  },
  {
      "name": "Parisian Polo Short Sleeve - Navy",
      "slug": "parisian-polo-short-sleeve-navy",
      "category": "polo",
      "sleeve": "short",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDA072023-065_01_7141da9a-7532-4695-81ac-36dce4b10e4d.jpg?v=1698588935&width=1400",
      "price": 170000,
      "disc": 120000,
      "description": "Polo shirt Parisian dengan lengan pendek yang nyaman dan stylish. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Polo shirt Parisian dengan lengan pendek.",
      "tags": [],
      "stok": 4
  },
  {
      "name": "Parisian Polo Short Sleeve - Black",
      "slug": "multicolor-polo-black",
      "category": "polo",
      "sleeve": "short",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDA072023-063_01_7a38b11a-7fa5-4d41-8b3a-ee534db71f78.jpg?v=1698588849&width=600",
      "price": 200000,
      "disc": 150000,
      "description": "Polo shirt Parisian dengan lengan pendek yang nyaman dan stylish. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Polo shirt Parisian dengan lengan pendek.",
      "tags": [],
      "stok": 8
  },
  {
      "name": "French Ivy Polo Short Sleeve - Army",
      "slug": "french-ivy-polo-short-sleeve-army",
      "category": "polo",
      "sleeve": "short",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDA072023-055_01_b730853b-2a24-41cf-910f-896724dcdcd9.jpg?v=1695222659&width=1400",
      "price": 220000,
      "disc": 170000,
      "description": "Polo shirt French Ivy dengan lengan pendek yang nyaman dan stylish. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Polo shirt French Ivy dengan lengan pendek.",
      "tags": [],
      "stok": 3
  },
  {
      "name": "Parisian Polo Long Sleeve - Navy",
      "slug": "parisian-polo-long-sleeve-navy",
      "category": "polo",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/files/TDA072023-066_01_e09f3b64-88e1-4124-8c4e-dbb766335ca1.jpg?v=1698591903&width=600",
      "price": 280000,
      "disc": 230000,
      "description": "Polo shirt Parisian dengan lengan panjang yang nyaman dan stylish. Terbuat dari bahan berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Polo shirt Parisian dengan lengan panjang.",
      "tags": [],
      "stok": 6
  },
  {
      "name": "DTD Linen Band Collar Long Sleeve - Khaki",
      "slug": "dtd-linen-band-collar-long-sleeve-khaki",
      "category": "basic",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024139_1_2e7e3b29-57c7-49f7-9bf2-f4ef7c37248e.jpg?v=1710324141&width=1400",
      "price": 310000,
      "disc": 260000,
      "description": "Kemeja lengan panjang dengan kerah band yang memberikan tampilan stylish dan modern. Terbuat dari bahan linen berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Kemeja lengan panjang dengan kerah band.",
      "tags": [],
      "stok": 9
  },
  {
      "name": "DTD Linen Band Collar Long Sleeve - White",
      "slug": "dtd-linen-band-collar-long-sleeve-white",
      "category": "basic",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024138_1_2e7e3b29-57c7-49f7-9bf2-f4ef7c37248e.jpg?v=1710324065&width=1400",
      "price": 320000,
      "disc": 270000,
      "description": "Kemeja lengan panjang dengan kerah band yang memberikan tampilan stylish dan modern. Terbuat dari bahan linen berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Kemeja lengan panjang dengan kerah band.",
      "tags": [],
      "stok": 5
  },
  {
      "name": "DTD Linen Band Collar Long Sleeve - Black",
      "slug": "dtd-linen-band-collar-long-sleeve-black",
      "category": "basic",
      "sleeve": "long",
      "image": "https://tenuedeattire.com/cdn/shop/products/TDACMT022024137_1_2e7e3b29-57c7-49f7-9bf2-f4ef7c37248e.jpg?v=1710323989&width=1400",
      "price": 330000,
      "disc": 280000,
      "description": "Kemeja lengan panjang dengan kerah band yang memberikan tampilan stylish dan modern. Terbuat dari bahan linen berkualitas tinggi yang memberikan kenyamanan maksimal. Cocok untuk gaya santai maupun semi-formal.",
      "excerpt": "Kemeja lengan panjang dengan kerah band.",
      "tags": [],
      "stok": 2
  }
]


async function seeding() {
    const productDB = db.collection("tanoe");
    const newProducts = users.map((el) => {
        el.createdAt = new Date()
        el.updatedAt = new Date()
        return el;
    });

    const result = await productDB.insertMany(newProducts);
    console.log(result);
}
seeding();