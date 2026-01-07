// =========================================================================================
// 1. DATA SOAL (DISIMPAN SEBAGAI VARIABEL JAVASCRIPT)
// Tambahkan field 'rationale' (Pembahasan) untuk umpan balik instan.
// =========================================================================================

const dataSoal = [
  {
    "id": 1,
    "soal": "Memori komputer berukuran kecil yang menyediakan akses data instan berkecepatan tinggi ke prosesor adalah....",
    "opsi_a": "random access memory",
    "opsi_b": "cache memory",
    "opsi_c": "read only memory",
    "opsi_d": "virtual memory",
    "jawaban": "B",
    "rationale": "Cache memory adalah memori berkecepatan tinggi yang menjembatani CPU dan RAM untuk mempercepat akses data."
  },
  {
    "id": 2,
    "soal": "Langkah pertama dalam penyusunan Data Flow Diagram (DFD) adalah....",
    "opsi_a": "membedakan proses dari data yang dihasilkan",
    "opsi_b": "menjelaskan aturan bisnis yang mempengaruhi transformasi data",
    "opsi_c": "menentukan penyimpanan duplikat",
    "opsi_d": "mengidentifikasi entitas yang menyuplai",
    "jawaban": "D",
    "rationale": "Langkah awal DFD adalah menentukan ruang lingkup dengan mengidentifikasi entitas eksternal (terminator) yang berinteraksi dengan sistem."
  },
  {
    "id": 3,
    "soal": "Model arsitektur yang memungkinkan aplikasi dan layanan terdistribusi dijaringan komputer adalah….",
    "opsi_a": "centralized",
    "opsi_b": "client-server",
    "opsi_c": "open-source",
    "opsi_d": "virtualization",
    "jawaban": "B",
    "rationale": "Arsitektur client-server membagi beban kerja antara penyedia layanan (server) dan peminta layanan (client)."
  },
  {
    "id": 4,
    "soal": "Fungsi dari perangkat lunak konstruksi gudang (Data Warehouse)....",
    "opsi_a": "menyimpan data",
    "opsi_b": "mengelola data",
    "opsi_c": "menghasilkan laporan",
    "opsi_d": "mengekstrak data yang relevan",
    "jawaban": "D",
    "rationale": "Perangkat lunak konstruksi gudang data fokus pada proses ETL (Extract, Transform, Load) untuk mengambil data dari berbagai sumber."
  },
  {
    "id": 5,
    "soal": "Dalam proyek teknologi informasi, tidak ada bug dalam aplikasi yang dikembangkan adalah metrik....",
    "opsi_a": "biaya",
    "opsi_b": "waktu",
    "opsi_c": "ruang lingkup",
    "opsi_d": "kualitas",
    "jawaban": "D",
    "rationale": "Ketiadaan bug atau cacat produksi merupakan indikator utama dari standar kualitas perangkat lunak."
  },
  {
    "id": 6,
    "soal": "Dalam hak penggunaan data, label unik untuk setiap jenis data adalah....",
    "opsi_a": "pengenal",
    "opsi_b": "definisi",
    "opsi_c": "aturan integritas",
    "opsi_d": "penamaan",
    "jawaban": "A",
    "rationale": "Pengenal (identifier) adalah label unik yang digunakan untuk mereferensikan elemen data tertentu secara spesifik."
  },
  {
    "id": 7,
    "soal": "Salah satu yang harus diperhatikan oleh manajemen adalah data harus mencerminkan nilai yang sebenarnya dan tidak mengandung kesalahan. Hal ini dikenal dengan istilah....",
    "opsi_a": "lengkap",
    "opsi_b": "konsisten",
    "opsi_c": "akurasi",
    "opsi_d": "relevan",
    "jawaban": "C",
    "rationale": "Akurasi mengacu pada sejauh mana data benar secara fakta dan bebas dari kesalahan."
  },
  {
    "id": 8,
    "soal": "Pernyataan tentang masa depan yang diinginkan oleh organisasi dalam pengelolaan dan penggunaan informasi adalah....",
    "opsi_a": "sasaran informasi",
    "opsi_b": "misi informasi",
    "opsi_c": "arsitektur teknologi informasi",
    "opsi_d": "visi informasi",
    "jawaban": "D",
    "rationale": "Visi adalah pernyataan aspirasional tentang masa depan yang ingin dicapai organisasi dalam jangka panjang."
  },
  {
    "id": 9,
    "soal": "Komputer multi-user yang digunakan oleh organisasi atau perusahaan kecil, untuk aplikasi dan layanan komersial adalah....",
    "opsi_a": "superkomputer",
    "opsi_b": "mainframe komputer",
    "opsi_c": "mikrokomputer",
    "opsi_d": "minikomputer",
    "jawaban": "D",
    "rationale": "Minikomputer dirancang untuk menangani kebutuhan komputasi skala menengah dan banyak pengguna sekaligus (multi-user)."
  },
  {
    "id": 10,
    "soal": "Keterbatasan dari pengukuran aspek finansial dan teknis dari sebuah proyek sistem informasi adalah pengabaian pada aspek....",
    "opsi_a": "sosial dan sumber daya manusia",
    "opsi_b": "sosial dan organisasional",
    "opsi_c": "sumber daya manusia dan organisasional",
    "opsi_d": "ekonomi dan lingkungan",
    "jawaban": "B",
    "rationale": "Analisis teknis/finansial murni sering mengabaikan faktor bagaimana sistem berdampak pada struktur organisasi dan interaksi sosial karyawan."
  },
  {
    "id": 11,
    "soal": "Dampak positif dari partisipasi pengguna dalam desain dan pengoperasian sistem informasi adalah....",
    "opsi_a": "pengembangan lebih cepat",
    "opsi_b": "biaya lebih murah",
    "opsi_c": "keamanan informasi lebih terjaga",
    "opsi_d": "hasil yang lebih sesuai dengan kebutuhan pengguna",
    "jawaban": "D",
    "rationale": "Keterlibatan pengguna memastikan spesifikasi sistem selaras dengan realitas pekerjaan mereka sehari-hari."
  },
  {
    "id": 12,
    "soal": "Koneksi jaringan dimana satu komputer dengan komputer yang lain dalam sebuah rangkaian yang berbentuk melingkar seperti cincin adalah topologi....",
    "opsi_a": "ring",
    "opsi_b": "bus",
    "opsi_c": "star",
    "opsi_d": "mesh",
    "jawaban": "A",
    "rationale": "Topologi ring menghubungkan setiap node ke dua node lainnya, membentuk jalur melingkar tertutup."
  },
  {
    "id": 13,
    "soal": "Layer ke 7 dari Open Systems Interconnection OSI model adalah....",
    "opsi_a": "application",
    "opsi_b": "presentation",
    "opsi_c": "transport",
    "opsi_d": "network",
    "jawaban": "A",
    "rationale": "Application layer adalah lapisan teratas (ke-7) yang berinteraksi langsung dengan aplikasi perangkat lunak pengguna."
  },
  {
    "id": 14,
    "soal": "Jaringan yang cocok untuk menghubungkan perangkat disatu kota atau beberapa kota berkaitan adalah....",
    "opsi_a": "Backbone Network",
    "opsi_b": "Local Area Network (LAN)",
    "opsi_c": "Metropolitan Area Network (MAN)",
    "opsi_d": "Wide Area Network (WAN)",
    "jawaban": "C",
    "rationale": "MAN mencakup area geografis seluas kota atau wilayah metropolitan."
  },
  {
    "id": 15,
    "soal": "Pada saat mulai didirikan, facebook fokus pada....",
    "opsi_a": "belanja online",
    "opsi_b": "jaringan antar pribadi yang bersifat sosial",
    "opsi_c": "iklan",
    "opsi_d": "facebook centang biru",
    "jawaban": "B",
    "rationale": "Awalnya Facebook (TheFacebook) dirancang sebagai direktori sosial untuk menghubungkan mahasiswa universitas."
  },
  {
    "id": 16,
    "soal": "Pengelompokkan risiko berdasarkan berbagai kriteria, seperti dampak, jenis, dan skala waktu adalah....",
    "opsi_a": "identifikasi risiko",
    "opsi_b": "klasifikasi risiko",
    "opsi_c": "analisis risiko",
    "opsi_d": "mitigasi risiko",
    "jawaban": "B",
    "rationale": "Klasifikasi risiko adalah proses mengelompokkan risiko ke dalam kategori tertentu (seperti dampak atau jenis) untuk memudahkan pengelolaan."
  },
  {
    "id": 17,
    "soal": "Mengidentifikasi ide atau kebutuhan proyek, menetapkan tujuan, dan pengumpulan dukungan dari pemangku kepentingan dilakukan pada fase....",
    "opsi_a": "perencanaan",
    "opsi_b": "inisiasi",
    "opsi_c": "pelaksanaan",
    "opsi_d": "pengendalian",
    "jawaban": "B",
    "rationale": "Fase inisiasi adalah tahap awal di mana proyek didefinisikan secara garis besar dan dukungan stakeholder dikumpulkan."
  },
  {
    "id": 18,
    "soal": "Manfaat potensial dari aplikasi Business to Consumer (B2C) adalah....",
    "opsi_a": "jangkauan global ke pembeli",
    "opsi_b": "mengurangi waktu siklus penjualan",
    "opsi_c": "mengurangi biaya transaksi",
    "opsi_d": "meningkatkan koordinasi antar mitra",
    "jawaban": "A",
    "rationale": "Manfaat utama B2C bagi bisnis adalah kemampuan untuk menjangkau pembeli di seluruh dunia secara langsung melalui internet."
  },
  {
    "id": 19,
    "soal": "Proses merancang arsitektur, antarmuka, modul, komponen hingga data agar sesuai persyaratan dilakukan pada langkah....",
    "opsi_a": "pembangunan",
    "opsi_b": "pengujian",
    "opsi_c": "desain",
    "opsi_d": "perencanaan",
    "jawaban": "C",
    "rationale": "Tahap desain (perancangan) adalah proses menerjemahkan persyaratan menjadi cetak biru teknis sistem."
  },
  {
    "id": 20,
    "soal": "Informasi terkini secara online tentang kondisi bisnis dalam bentuk konsolidasi yang mudah diakses oleh manajer senior dan manajer lainnya adalah sistem informasi....",
    "opsi_a": "spasial",
    "opsi_b": "manajemen",
    "opsi_c": "eksekutif",
    "opsi_d": "terpadu",
    "jawaban": "C",
    "rationale": "Executive Information System (EIS) dirancang khusus untuk memberikan ringkasan data strategis bagi manajemen tingkat atas."
  },
  {
    "id": 21,
    "soal": "Peluang e-bisnis untuk perusahaan tradisional adalah....",
    "opsi_a": "mengurangi tingkat kompetisi",
    "opsi_b": "menambah kebutuhan tenaga penjualan langsung",
    "opsi_c": "menambah saluran distribusi",
    "opsi_d": "perluasan pasar potensial",
    "jawaban": "D",
    "rationale": "E-bisnis memungkinkan perusahaan tradisional untuk menjangkau segmen pasar baru yang sebelumnya tidak terjangkau secara fisik."
  },
  {
    "id": 22,
    "soal": "Proyek pengembangan perangkat lunak lebih unggul dibandingkan dengan pembelian paket perangkat lunak dalam hal....",
    "opsi_a": "risiko kegagalan",
    "opsi_b": "biaya",
    "opsi_c": "waktu",
    "opsi_d": "fleksibilitas",
    "jawaban": "D",
    "rationale": "Membangun sendiri (in-house) memberikan fleksibilitas tinggi karena fitur dapat disesuaikan tepat dengan kebutuhan organisasi."
  },
  {
    "id": 23,
    "soal": "Sistem baru diterapkan terlebih dahulu dalam skala kecil sebelum diterapkan secara luas adalah strategi....",
    "opsi_a": "phasing",
    "opsi_b": "parallel",
    "opsi_c": "pilot",
    "opsi_d": "cutover",
    "jawaban": "C",
    "rationale": "Strategi pilot melibatkan penerapan sistem di satu bagian organisasi sebagai uji coba sebelum peluncuran penuh."
  },
  {
    "id": 24,
    "soal": "Penghasilan yang diperoleh dengan mempromosikan produk atau jasa milik pihak lain dan mendapatkan komisi adalah....",
    "opsi_a": "advertensi",
    "opsi_b": "penjualan",
    "opsi_c": "pialang",
    "opsi_d": "affiliasi",
    "jawaban": "D",
    "rationale": "Affiliate marketing adalah model bisnis berbasis komisi dari hasil mempromosikan produk pihak lain."
  },
  {
    "id": 25,
    "soal": "Fitur petunjuk arah pada Google Map merupakan manfaat dari sistem....",
    "opsi_a": "pendukung keputusan",
    "opsi_b": "dukungan kelompok",
    "opsi_c": "informasi eksekutif",
    "opsi_d": "informasi geografi",
    "jawaban": "D",
    "rationale": "GIS (Geographic Information System) digunakan untuk mengelola dan menyajikan data berbasis lokasi geografis."
  },
  {
    "id": 26,
    "soal": "Perangkat lunak komputer yang dirancang untuk berbagi informasi dan berkolaborasi adalah....",
    "opsi_a": "netware",
    "opsi_b": "firmware",
    "opsi_c": "spyware",
    "opsi_d": "groupware",
    "jawaban": "D",
    "rationale": "Groupware adalah perangkat lunak yang membantu orang yang bekerja dalam kelompok untuk berkolaborasi secara efisien."
  },
  {
    "id": 27,
    "soal": "Pemasaran yang didorong oleh percakapan, pilihan, dan opini di jejaring dikenal dengan pemasaran....",
    "opsi_a": "digital",
    "opsi_b": "langsung",
    "opsi_c": "konten",
    "opsi_d": "sosial",
    "jawaban": "D",
    "rationale": "Social media marketing sangat bergantung pada interaksi sosial dan opini komunitas di dalam platform tersebut."
  },
  {
    "id": 28,
    "soal": "Tujuan keseluruhan dari manajemen layanan TI dengan ITIL adalah....",
    "opsi_a": "pelacakan insiden komputer lebih cepat",
    "opsi_b": "proses manajemen perubahan formal",
    "opsi_c": "tersedia kapasitas komputer memadai",
    "opsi_d": "menyelaraskan layanan TI dengan kebutuhan bisnis secara efektif",
    "jawaban": "D",
    "rationale": "Meskipun opsinya panjang, ITIL berfokus pada antisipasi dampak dan efisiensi layanan TI bagi operasional bisnis."
  },
  {
    "id": 29,
    "soal": "Tahapan setelah langkah pemrograman pada pengembangan sistem informasi adalah....",
    "opsi_a": "analisis",
    "opsi_b": "perancangan",
    "opsi_c": "pengujian",
    "opsi_d": "konversi",
    "jawaban": "C",
    "rationale": "Setelah kode selesai ditulis (pemrograman), langkah selanjutnya adalah Testing (pengujian) untuk memastikan tidak ada error."
  },
  {
    "id": 30,
    "soal": "Keuntungan dari pendekatan SDLC adalah....",
    "opsi_a": "murah",
    "opsi_b": "cepat",
    "opsi_c": "terstruktur dan sistematis",
    "opsi_d": "fleksibel",
    "jawaban": "C",
    "rationale": "SDLC tradisional (Waterfall) dikenal karena metodenya yang sangat terorganisir dan mengikuti urutan yang kaku."
  },
 {
  "id": 31,
  "soal": "Prototyping dalam SDLC yang berfokus pada antarmuka pengguna dilakukan pada tahap....",
  "opsi_a": "definisi",
  "opsi_b": "konstruksi",
  "opsi_c": "implementasi",
  "opsi_d": "instalasi",
  "jawaban": "B",
  "rationale": "Tahap konstruksi dalam prototyping melibatkan pembuatan model kerja atau desain antarmuka yang memungkinkan pengguna memberikan umpan balik sebelum pengembangan sistem skala penuh dimulai."
},
  {
    "id": 32,
    "soal": "Manfaat utama pengembangan aplikasi penggunaan akhir (End-User Development) adalah....",
    "opsi_a": "aplikasi lebih terkendali",
    "opsi_b": "skalabilitas tidak terbatas",
    "opsi_c": "performa tinggi",
    "opsi_d": "kecepatan pemenuhan kebutuhan spesifik user",
    "jawaban": "D",
    "rationale": "Karena pengguna membuat aplikasinya sendiri, prosesnya lebih cepat dan sesuai dengan kebutuhan praktis mereka tanpa antrean di departemen IT."
  },
  {
    "id": 33,
    "soal": "Menurut Halpern (1999), besarnya proyek yang berkorelasi dengan risiko termasuk dalam dimensi....",
    "opsi_a": "kematangan teknologi",
    "opsi_b": "kompleksitas struktural",
    "opsi_c": "ukuran",
    "opsi_d": "kuantitas",
    "jawaban": "C",
    "rationale": "Project Size (Ukuran Proyek) adalah dimensi risiko yang melihat skala proyek (biaya, waktu, jumlah staf)."
  },
  {
    "id": 34,
    "soal": "Segala sesuatu yang berada diluar sistem adalah....",
    "opsi_a": "environment",
    "opsi_b": "component",
    "opsi_c": "boundary",
    "opsi_d": "input",
    "jawaban": "A",
    "rationale": "Environment (lingkungan luar) adalah segala sesuatu di luar batas sistem yang memengaruhi kerja sistem."
  },
  {
    "id": 35,
    "soal": "Sistem yang dirancang untuk mengolah informasi keuangan secara terstruktur adalah sistem informasi....",
    "opsi_a": "manajemen",
    "opsi_b": "akuntansi",
    "opsi_c": "pakar",
    "opsi_d": "perkantoran",
    "jawaban": "B",
    "rationale": "Sistem Informasi Akuntansi (SIA) khusus menangani transaksi dan data keuangan organisasi."
  },
  {
    "id": 36,
    "soal": "Jumlah kejadian atau insiden yang diperkirakan akan terjadi dalam satu tahun adalah….",
    "opsi_a": "single loss expectancy",
    "opsi_b": "annualized expected loss",
    "opsi_c": "services level agreement",
    "opsi_d": "annual occurrence rate",
    "jawaban": "D",
    "rationale": "Annual Occurrence Rate (ARO) mengukur berapa kali sebuah ancaman diperkirakan terjadi dalam setahun."
  },
  {
    "id": 37,
    "soal": "Tahapan setelah melakukan analisis strategi bisnis perusahaan adalah ....",
    "opsi_a": "menginventarisasi layanan TI",
    "opsi_b": "menentukan total biaya infrastruktur TI",
    "opsi_c": "mengevaluasi keselarasan TI dan bisnis",
    "opsi_d": "menentukan jenis teknologi informasi yang cocok",
    "jawaban": "C",
    "rationale": "Setelah mengetahui strategi bisnis, perusahaan harus memastikan strategi TI yang dirancang selaras (alignment) dengan bisnis tersebut."
  },
  {
    "id": 38,
    "soal": "Siapa yang bertanggung jawab atas kerusakan informasi individu termasuk dalam dimensi....",
    "opsi_a": "hak dan kewajiban informasi",
    "opsi_b": "hak dan kewajiban properti",
    "opsi_c": "akuntabilitas",
    "opsi_d": "kualitas sistem",
    "jawaban": "C",
    "rationale": "Akuntabilitas berkaitan dengan penentuan siapa yang harus bertanggung jawab atas tindakan dan kerugian dalam sistem informasi."
  },
  {
    "id": 39,
    "soal": "Proses menjamin keaslian dan keabsahan arsip ERM adalah....",
    "opsi_a": "analisis",
    "opsi_b": "klasifikasi",
    "opsi_c": "mendefinisikan",
    "opsi_d": "autentifikasi",
    "jawaban": "D",
    "rationale": "Autentifikasi adalah proses pembuktian bahwa suatu arsip elektronik benar-benar asli dan sah."
  },
  {
    "id": 40,
    "soal": "Peningkatan pada aspek proses bisnis dan transaksi harian merupakan keunggulan....",
    "opsi_a": "strategis",
    "opsi_b": "taktis",
    "opsi_c": "kompetitif",
    "opsi_d": "operasional",
    "jawaban": "D",
    "rationale": "Keunggulan operasional berfokus pada efisiensi aktivitas sehari-hari dan proses internal perusahaan."
  },
  {
    "id": 41,
    "soal": "Jumlah pengguna media sosial terbesar di Indonesia berdasarkan katadata.com Januari 2023 adalah....",
    "opsi_a": "tiktok",
    "opsi_b": "youtube",
    "opsi_c": "facebook",
    "opsi_d": "whatsapp",
    "jawaban": "D",
    "rationale": "Berdasarkan data awal 2023, WhatsApp sering tercatat memiliki tingkat penggunaan/penetrasi tertinggi di Indonesia."
  },
  {
    "id": 42,
    "soal": "Manfaat adanya UU ITE bagi masyarakat adalah....",
    "opsi_a": "meningkatkan persaingan usaha bidang digital",
    "opsi_b": "mencegah adanya kejahatan melalui internet",
    "opsi_c": "mencegah hoaks/berita bohong",
    "opsi_d": "kebebasan berpendapat dimedia sosial",
    "jawaban": "B",
    "rationale": "Fungsi utama UU ITE adalah memberikan payung hukum untuk melindungi masyarakat dari cybercrime."
  },
  {
    "id": 43,
    "soal": "Menjadi AI developer adalah salah satu sikap individu dalam menghadapi teknologi informasi yaitu....",
    "opsi_a": "bijak menggunakan teknologi informasi",
    "opsi_b": "buat inovasi terkait teknologi informasi",
    "opsi_c": "beradaptasi dengan teknologi informasi",
    "opsi_d": "memanfaatkan teknologi informasi",
    "jawaban": "B",
    "rationale": "Menjadi pengembang (developer) berarti aktif menciptakan solusi baru, yang merupakan perwujudan dari sikap berinovasi."
  },
  {
    "id": 44,
    "soal": "Model layanan yang memungkinkan pengguna mengakses server, penyimpanan, aplikasi melalui internet, tanpa perlu memiliki atau mengelola infrastruktur fisik sendiri adalah ....",
    "opsi_a": "cloud computing",
    "opsi_b": "green computing",
    "opsi_c": "edge computing",
    "opsi_d": "quantum computing",
    "jawaban": "A",
    "rationale": "Cloud computing (Komputasi Awan) adalah model pengiriman layanan komputasi melalui internet untuk akses sumber daya seperti server dan storage secara on-demand."
  },
  {
    "id": 45,
    "soal": "Undang-undang privasi amerika serikat pada era milenium baru menurut Baron yang mengatur pemblokiran akses tidak sah ke email adalah UU privasi....",
    "opsi_a": "komunikasi elektronik",
    "opsi_b": "hak pendidikan dan privasi keluarga",
    "opsi_c": "perlindungan video",
    "opsi_d": "pengemudi",
    "jawaban": "A",
    "rationale": "Electronic Communications Privacy Act (ECPA) adalah undang-undang yang mengatur perlindungan terhadap penyadapan dan akses tidak sah pada komunikasi elektronik termasuk email."
  },
  {
    "id": 46,
    "soal": "Komponen inti dari komputer adalah komponen….",
    "opsi_a": "pengolah",
    "opsi_b": "pengendali",
    "opsi_c": "memori",
    "opsi_d": "input",
    "jawaban": "A",
    "rationale": "Komponen pengolah (Processor/CPU) adalah otak atau inti dari komputer yang menjalankan instruksi dan memproses data."
  },
  {
    "id": 47,
    "soal": "Variabel yang digunakan untuk menyimpan data atau informasi tentang obyek adalah....",
    "opsi_a": "kelas",
    "opsi_b": "metode",
    "opsi_c": "atribut",
    "opsi_d": "enkapsulasi",
    "jawaban": "C",
    "rationale": "Dalam pemrograman berorientasi objek, atribut (atau properti) adalah variabel yang menyimpan data yang mendefinisikan karakteristik suatu objek."
  },
  {
    "id": 48,
    "soal": "Sistem informasi yang fokus pada kebutuhan informasi untuk setiap bagian atau departemen dalam sebuah organisasi adalah sistem informasi....",
    "opsi_a": "fungsional",
    "opsi_b": "terpadu",
    "opsi_c": "manajemen",
    "opsi_d": "pakar",
    "jawaban": "A",
    "rationale": "Sistem Informasi Fungsional dirancang untuk mendukung area fungsional tertentu dalam organisasi seperti pemasaran, keuangan, SDM, atau produksi."
  },
  {
    "id": 49,
    "soal": "Pada sistem pemasukan pesanan catatan yang berisi detail lengkap tentang setiap item persediaan dan produk jadi adalah....",
    "opsi_a": "customer master file",
    "opsi_b": "inventory master file",
    "opsi_c": "sales master file",
    "opsi_d": "back order file",
    "jawaban": "B",
    "rationale": "Inventory Master File berisi data statis dan dinamis mengenai persediaan barang, stok, dan detail produk yang tersedia."
  },
  {
    "id": 50,
    "soal": "Misi dari kemitraan antara bisnis dan teknologi informasi yang berorientasi pada pengguna adalah ....",
    "opsi_a": "memperoleh kontribusi bisnis dan investasi IT yang layak",
    "opsi_b": "menghasilkan aplikasi IT yang efektif dan efisien",
    "opsi_c": "mengembangkan peluang untuk tantangan masa depan",
    "opsi_d": "menjadi pemasok IT yang disukai",
    "jawaban": "B",
    "rationale": "Fokus pada pengguna dalam konteks TI biasanya bertujuan untuk memastikan aplikasi yang dikembangkan benar-benar fungsional, efektif, dan efisien bagi operasional mereka."
  },
 {
  "id": 51,
  "soal": "Spesifikasi nilai yang sah untuk jenis data adalah....",
  "opsi_a": "integrity rule",
  "opsi_b": "indentifier",
  "opsi_c": "definition",
  "opsi_d": "naming",
  "jawaban": "A",
  "rationale": "Integrity rule (aturan integritas) berfungsi untuk menetapkan batasan atau spesifikasi nilai yang sah (domain integrity) guna memastikan keakuratan, validitas, dan konsistensi data dalam basis data."
},
  {
    "id": 52,
    "soal": "Prinsip dalam pengolahan data bahwa data harus sah dan memiliki dasar yang kuat untuk digunakan adalah....",
    "opsi_a": "akurat",
    "opsi_b": "valid",
    "opsi_c": "lengkap",
    "opsi_d": "perlindungan",
    "jawaban": "B",
    "rationale": "Validitas (valid) merujuk pada keabsahan data, apakah data tersebut benar-benar mewakili fakta atau standar yang ditetapkan."
  },
 {
  "id": 53,
  "soal": "Langkah pertama pada proses perencanaan sistem informasi adalah....",
  "opsi_a": "pembentukan visi informasi",
  "opsi_b": "pembentukan arsitektur teknologi informasi",
  "opsi_c": "penilaian sumber informasi saat ini",
  "opsi_d": "perumusan rencana strategis sistem informasi",
  "jawaban": "A",
  "rationale": "Pembentukan visi informasi adalah langkah awal yang krusial untuk menetapkan arah dan tujuan jangka panjang penggunaan teknologi informasi agar selaras dengan misi bisnis organisasi sebelum menilai sumber daya yang ada atau merancang arsitektur."
},
  {
    "id": 54,
    "soal": "File Transfer Protocol (FTP) merupakan jenis perangkat lunak....",
    "opsi_a": "productivity",
    "opsi_b": "supporting",
    "opsi_c": "communication interface",
    "opsi_d": "utility",
    "jawaban": "C",
    "rationale": "FTP adalah protokol komunikasi yang berfungsi sebagai antarmuka untuk memindahkan file antar komputer di jaringan."
  },
  {
    "id": 55,
    "soal": "Pada piramida tingkatan struktur manajemen proyek sistem informasi operational management bertindak sebagai....",
    "opsi_a": "corporate strategic planning group",
    "opsi_b": "steering committee",
    "opsi_c": "project management",
    "opsi_d": "project team",
    "jawaban": "D",
    "rationale": "Dalam hierarki proyek, manajemen operasional biasanya berada di level tim proyek (project team) yang menjalankan tugas teknis harian."
  },
  {
    "id": 56,
    "soal": "Dampak positif apabila proyek sistem informasi mendapat dukungan dan komitmen dari manajemen adalah....",
    "opsi_a": "proyek lebih cepat selesai",
    "opsi_b": "meningkatkan efisiensi",
    "opsi_c": "proyek menerima dana dan sumber daya yang cukup",
    "opsi_d": "peningkatan kompetensi sumber daya manusia proyek",
    "jawaban": "C",
    "rationale": "Dukungan manajemen puncak sangat krusial untuk alokasi dana dan ketersediaan sumber daya manusia/peralatan."
  },
  {
    "id": 57,
    "soal": "Setiap perangkat terhubung secara langsung ke perangkat lainnya yang ada di dalam jaringan adalah jenis topologi....",
    "opsi_a": "bus",
    "opsi_b": "mesh",
    "opsi_c": "ring",
    "opsi_d": "star",
    "jawaban": "B",
    "rationale": "Topologi Mesh memungkinkan setiap node terhubung secara dedicated (point-to-point) ke semua node lainnya."
  },
  {
    "id": 58,
    "soal": "Pada Open Systems Interconnection OSI model lapisan yang terdekat dengan media adalah layer....",
    "opsi_a": "fisik",
    "opsi_b": "aplikasi",
    "opsi_c": "presentasi",
    "opsi_d": "transportasi",
    "jawaban": "A",
    "rationale": "Layer Fisik (Physical) adalah lapisan terbawah (Layer 1) yang menangani transmisi bit data melalui media fisik seperti kabel atau sinyal radio."
  },
  {
    "id": 59,
    "soal": "Synchronous Optical Network (SONET) adalah salah satu jenis layanan ….",
    "opsi_a": "local area network",
    "opsi_b": "direct distance dialing",
    "opsi_c": "wide area network leased lines",
    "opsi_d": "satelit",
    "jawaban": "C",
    "rationale": "SONET adalah standar transmisi data digital berkecepatan tinggi melalui serat optik yang umumnya digunakan pada jaringan WAN."
  },
  {
    "id": 60,
    "soal": "Dot com yang sukses menjadi perantara online melalui teknologi, algoritma pencarian web adalah....",
    "opsi_a": "ebay",
    "opsi_b": "google",
    "opsi_c": "facebook",
    "opsi_d": "paypal",
    "jawaban": "B",
    "rationale": "Google adalah contoh utama perusahaan dot com yang sukses dengan algoritma pencarian sebagai bisnis intinya."
  },
  {
    "id": 61,
    "soal": "Tanda peringatan dini yang berhubungan dengan manusia dalam proyek adalah....",
    "opsi_a": "anggota tim ditugaskan ke proyek dengan prioritas lebih tinggi",
    "opsi_b": "kriteria output proyek tidak jelas",
    "opsi_c": "manfaat yang diharapkan tidak terperinci",
    "opsi_d": "partisipasi stakeholder yang kurang memadai",
    "jawaban": "D",
    "rationale": "Stakeholder adalah elemen manusia; partisipasi yang kurang menunjukkan masalah komunikasi atau komitmen personil."
  },
  {
    "id": 62,
    "soal": "Penyusunan anggaran proyek dimana pimpinan puncak menetapkan anggaran secara keseluruhan adalah metode....",
    "opsi_a": "bottom up",
    "opsi_b": "top down",
    "opsi_c": "chunk up",
    "opsi_d": "just in time",
    "jawaban": "B",
    "rationale": "Top-down budgeting berarti anggaran diturunkan dari manajemen atas ke level bawah proyek."
  },
  {
    "id": 63,
    "soal": "Keuntungan dari perusahaan online berbasis dot-com dibandingkan dengan ritel offline adalah....",
    "opsi_a": "saingan rendah",
    "opsi_b": "biaya operasional lebih rendah",
    "opsi_c": "keamanan tingggi",
    "opsi_d": "kredibilitas tinggi",
    "jawaban": "B",
    "rationale": "Perusahaan online tidak membutuhkan banyak toko fisik, sehingga menekan biaya sewa dan operasional toko."
  },
  {
    "id": 64,
    "soal": "Pernyataan yang tepat tentang sistem yang dibeli dalam bentuk paket adalah....",
    "opsi_a": "pada pembelian sistem vendor persyaratan teknis perangkat lunak harus lengkap",
    "opsi_b": "pada pembelian sistem paket kapasitas fungsionalitas sistem harus terpaket",
    "opsi_c": "pada sistem yang dibeli dalam bentuk paket jumlah dan kualitas dokumen harus tersedia",
    "opsi_d": "pada sistem yang dibeli dalam bentuk paket karakteristik bisnis perusahaan vendor harus lengkap",
    "jawaban": "C",
    "rationale": "Saat membeli paket (off-the-shelf), kelengkapan dokumentasi user manual dan teknis sangat penting karena sistem tidak dibuat khusus untuk user."
  },
  {
    "id": 65,
    "soal": "Pola awal dalam jaringan saraf (neural network) digunakan untuk melakukan....",
    "opsi_a": "prediksi",
    "opsi_b": "diagnosis",
    "opsi_c": "visualisasi",
    "opsi_d": "analisis",
    "jawaban": "A",
    "rationale": "Neural network melatih pola untuk mengenali tren dan melakukan prediksi di masa depan."
  },
  {
    "id": 66,
    "soal": "Menurut Porter dampak e-business terhadap perusahaan tradisional adalah....",
    "opsi_a": "menambah tenaga penjualan langsung",
    "opsi_b": "kesulitan mencari pemasok",
    "opsi_c": "mengurangi persaingan",
    "opsi_d": "pelebaran pasar geografis",
    "jawaban": "D",
    "rationale": "E-business menghilangkan batas fisik, memungkinkan perusahaan tradisional menjual barang ke luar wilayah geografis asalnya."
  },
  {
    "id": 67,
    "soal": "Resiko yang terjadi ketika melakukan pembelian paket perangkat lunak adalah....",
    "opsi_a": "pembelian paket perangkat lunak lebih mahal daripada membuat sendiri",
    "opsi_b": "keamanan data",
    "opsi_c": "kurangnya pengetahuan tentang paket yang dibeli",
    "opsi_d": "user yang kurang ahli dalam mengoperasikan perangkat lunak",
    "jawaban": "C",
    "rationale": "Risiko utama sistem paket adalah ketidakcocokan fitur atau kurangnya pengetahuan internal untuk melakukan modifikasi/perbaikan."
  },
  {
    "id": 68,
    "soal": "Proses membuat perubahan pada sistem setelah dimasukan ke mode produksi adalah....",
    "opsi_a": "instalasi",
    "opsi_b": "operasi",
    "opsi_c": "pengendalian",
    "opsi_d": "pemeliharaan",
    "jawaban": "D",
    "rationale": "Maintenance (pemeliharaan) adalah fase setelah sistem live untuk memperbaiki bug atau update fitur."
  },
  {
    "id": 69,
    "soal": "Google drive (layanan gratis terbatas, bayar untuk kapasitas lebih) menggunakan model....",
    "opsi_a": "advertensi",
    "opsi_b": "freemium",
    "opsi_c": "premium",
    "opsi_d": "subscribe",
    "jawaban": "B",
    "rationale": "Freemium berasal dari kata 'Free' (gratis dasar) dan 'Premium' (bayar untuk fitur lengkap)."
  },
  {
    "id": 70,
    "soal": "Memprediksikan ketertarikan pengunjung saat mengakses situs merupakan manfaat data mining....",
    "opsi_a": "pemasaran langsung",
    "opsi_b": "penjualan silang",
    "opsi_c": "pemasaran interaktif",
    "opsi_d": "analisis keranjang pasar",
    "jawaban": "C",
    "rationale": "Interactive marketing menggunakan data real-time untuk menyesuaikan penawaran kepada user di situs web."
  },
  {
    "id": 71,
    "soal": "Jaringan untuk membagi informasi rahasia hanya kepada karyawan adalah....",
    "opsi_a": "ekstranet",
    "opsi_b": "intranet",
    "opsi_c": "internet",
    "opsi_d": "portal",
    "jawaban": "B",
    "rationale": "Intranet adalah jaringan privat internal perusahaan yang tidak dapat diakses oleh publik."
  },
  {
    "id": 72,
    "soal": "Salah satu manfaat dari internet adalah mengurangi asimetri informasi yaitu....",
    "opsi_a": "salah satu pihak memiliki informasi yang lebih banyak daripada pihak lain",
    "opsi_b": "kesalahan informasi",
    "opsi_c": "informasi yang tidak utuh",
    "opsi_d": "informasi yang tidak sampai",
    "jawaban": "A",
    "rationale": "Asimetri informasi terjadi ketika penjual tahu lebih banyak dari pembeli (atau sebaliknya); internet membuat informasi transparan bagi semua."
  },
  {
    "id": 73,
    "soal": "Membebankan biaya hanya pada mereka yang mengonsumsi manfaat TI adalah manfaat sistem....",
    "opsi_a": "allocation",
    "opsi_b": "showback",
    "opsi_c": "chargeback",
    "opsi_d": "financial management",
    "jawaban": "C",
    "rationale": "Chargeback adalah metode akuntansi TI di mana departemen pengguna ditagih berdasarkan penggunaan sumber daya TI mereka."
  },
  {
    "id": 74,
    "soal": "Tujuan dari pembuatan BPMN dalam membangun sistem informasi adalah....",
    "opsi_a": "alur kerja atau proses secara visual",
    "opsi_b": "aliran data dalam suatu sistem",
    "opsi_c": "spesifikasi perangkat lunak",
    "opsi_d": "menggambarkan proses bisnis sebuah organisasi/perusahaan dan notasi",
    "jawaban": "D",
    "rationale": "BPMN (Business Process Model and Notation) fokus pada pemodelan proses bisnis agar mudah dipahami oleh pihak teknis maupun bisnis."
  },
  {
    "id": 75,
    "soal": "Model awal perangkat lunak untuk menguji konsep sebelum pengembangan penuh adalah....",
    "opsi_a": "portofolio",
    "opsi_b": "mockup",
    "opsi_c": "prototype",
    "opsi_d": "blueprint",
    "jawaban": "C",
    "rationale": "Prototype adalah model kerja awal yang digunakan untuk validasi fungsionalitas kepada pengguna."
  },
  {
    "id": 76,
    "soal": "Pelatihan personel untuk mengelola resiko user application development termasuk aspek....",
    "opsi_a": "aplikasi",
    "opsi_b": "pengembang",
    "opsi_c": "alat",
    "opsi_d": "proses",
    "jawaban": "B",
    "rationale": "Personel adalah orang yang mengembangkan aplikasi (pengembang), maka pelatihan masuk dalam kategori manajemen SDM/Pengembang."
  },
  {
    "id": 77,
    "soal": "Metode pengembangan perangkat lunak dengan cara membuat rancangan sampel atau model adalah ....",
    "opsi_a": "waterfall",
    "opsi_b": "scrum",
    "opsi_c": "agile",
    "opsi_d": "prototype",
    "jawaban": "D",
    "rationale": "Prototyping adalah metodologi yang mengutamakan pembuatan model fisik/digital sebelum sistem final dibuat."
  },
  {
    "id": 78,
    "soal": "Metode menangani kompleksitas proyek dengan mengukur dimensi jumlah....",
    "opsi_a": "unit, pemangku kepentingan dan sumber daya yang berbeda",
    "opsi_b": "unit, sumber daya yang berbeda dan aktifitas",
    "opsi_c": "unit, anggota proyek dan pemangku kepentingan",
    "opsi_d": "anggota proyek, aktifitas dan sumber daya yang berbeda",
    "jawaban": "A",
    "rationale": "Kompleksitas diukur dari seberapa banyak departemen (unit), orang terlibat (stakeholder), dan variasi resources yang digunakan."
  },
  {
    "id": 79,
    "soal": "Agar pengguna dapat berinteraksi dengan sistem secara efisien dibutuhkan.…",
    "opsi_a": "antarmuka",
    "opsi_b": "masukan",
    "opsi_c": "keluaran",
    "opsi_d": "komponen",
    "jawaban": "A",
    "rationale": "User Interface (Antarmuka) adalah titik pertemuan antara manusia dan mesin agar terjadi interaksi."
  },
  {
    "id": 80,
    "soal": "Tujuan dari dekomposisi hierarkis adalah....",
    "opsi_a": "membuat sistem semakin kompleks",
    "opsi_b": "merancang dan membuat subsistem dalam waktu yang sama",
    "opsi_c": "menganalisis atau mengubah bagian dari sistem tanpa mengganggu keseluruhan",
    "opsi_d": "komponen sistem dapat beroperasi secara sinergi",
    "jawaban": "C",
    "rationale": "Dekomposisi memecah sistem besar menjadi modul kecil agar lebih mudah dikelola dan diperbaiki secara terpisah."
  },
  {
    "id": 81,
    "soal": "Perangkat lunak berbahaya yang menyamar sebagai perangkat lunak yang sah adalah....",
    "opsi_a": "logic bomb",
    "opsi_b": "denial of service",
    "opsi_c": "trojan horse",
    "opsi_d": "spoofing",
    "jawaban": "C",
    "rationale": "Trojan Horse terlihat seperti aplikasi berguna namun menyembunyikan kode berbahaya di dalamnya."
  },
  {
    "id": 82,
    "soal": "Upaya mengoptimalkan situs web agar mudah ditemukan di mesin pencari adalah....",
    "opsi_a": "search engine optimization",
    "opsi_b": "landing page",
    "opsi_c": "content management system",
    "opsi_d": "user interface",
    "jawaban": "A",
    "rationale": "SEO (Search Engine Optimization) adalah teknik untuk meningkatkan ranking website di Google/Bing."
  },
  {
    "id": 83,
    "soal": "Izin hukum untuk memperbaiki kerusakan sistem informasi yang disebabkan pihak lain adalah konsep....",
    "opsi_a": "responsibilitas",
    "opsi_b": "akuntabilitas",
    "opsi_c": "liabilitas",
    "opsi_d": "otoritas",
    "jawaban": "C",
    "rationale": "Liability (liabilitas) berkaitan dengan tanggung jawab hukum untuk membayar ganti rugi atau memperbaiki kerusakan."
  },
  {
    "id": 84,
    "soal": "Pada BCP, tahapan setelah memeriksa semua kemungkinan gangguan adalah....",
    "opsi_a": "menentukan proses dan departemen bisnis kritis",
    "opsi_b": "mengidentifikasi ketergantungan antara proses bisnis penting",
    "opsi_c": "mengumpulkan informasi kualitatif dan kuantitatif tentang ancaman",
    "opsi_d": "memberikan solusi untuk pemulihan sistem",
    "jawaban": "A",
    "rationale": "Setelah tahu ancamannya, langkah berikutnya adalah memetakan area bisnis mana yang paling kritis untuk segera diselamatkan."
  },
  {
    "id": 85,
    "soal": "Layanan BRISat BRI yang lebih unggul dari bank lain termasuk keunggulan....",
    "opsi_a": "taktis",
    "opsi_b": "operasional",
    "opsi_c": "strategis",
    "opsi_d": "kompetitif",
    "jawaban": "C",
    "rationale": "Menggunakan satelit sendiri adalah keputusan jangka panjang untuk mendominasi pasar, sehingga bersifat strategis."
  },
  {
    "id": 86,
    "soal": "Era peralatan TI bisa dibawa ke mana saja dikenal dengan era....",
    "opsi_a": "mainframe",
    "opsi_b": "mobile",
    "opsi_c": "client server",
    "opsi_d": "cloud computing",
    "jawaban": "B",
    "rationale": "Era Mobile Computing ditandai dengan penggunaan smartphone dan gadget portable."
  },
  {
    "id": 87,
    "soal": "Kritik melalui media sosial diatur dalam UU nomor 14 tahun 2008 tentang....",
    "opsi_a": "keterbukaan informasi publik",
    "opsi_b": "hak asasi manusia",
    "opsi_c": "informasi dan transaksi elektronik",
    "opsi_d": "perlindungan data pribadi",
    "jawaban": "A",
    "rationale": "UU No 14 Tahun 2008 adalah tentang Keterbukaan Informasi Publik (KIP)."
  },
  {
    "id": 88,
    "soal": "Perusahaan membuat omni channels adalah strategi....",
    "opsi_a": "customer experience",
    "opsi_b": "disruptive",
    "opsi_c": "connected customer",
    "opsi_d": "digital mindset",
    "jawaban": "A",
    "rationale": "Omni-channel bertujuan memberikan pengalaman belanja yang mulus dan konsisten bagi pelanggan di semua kanal."
  },
  {
    "id": 89,
    "soal": "Teknologi komputer belajar dari data tanpa diprogram secara eksplisit....",
    "opsi_a": "natural language processing",
    "opsi_b": "internet of things",
    "opsi_c": "machine learning",
    "opsi_d": "artificial intelligence",
    "jawaban": "C",
    "rationale": "Machine Learning adalah cabang AI yang fokus pada pengembangan sistem yang belajar dari pola data."
  },
  {
    "id": 90,
    "soal": "Hak eksklusif penemu atas invensinya di bidang teknologi adalah hak....",
    "opsi_a": "cipta",
    "opsi_b": "lisensi",
    "opsi_c": "paten",
    "opsi_d": "desain",
    "jawaban": "C",
    "rationale": "Paten diberikan khusus untuk invensi teknologi yang baru dan dapat diterapkan dalam industri."
  },
  {
    "id": 91,
    "soal": "Memori komputer berukuran kecil yang menyediakan akses data instan berkecepatan tinggi ke prosesor adalah....",
    "opsi_a": "random access memory",
    "opsi_b": "cache memory",
    "opsi_c": "read only memory",
    "opsi_d": "virtual memory",
    "jawaban": "B",
    "rationale": "Cache memory adalah tipe memori berkecepatan sangat tinggi yang menyimpan salinan data dari RAM yang paling sering digunakan oleh CPU."
  },
  {
    "id": 92,
    "soal": "Langkah pertama dalam penyusunan Data Flow Diagram (DFD) adalah....",
    "opsi_a": "membedakan proses dari data yang dihasilkan",
    "opsi_b": "menjelaskan aturan bisnis yang mempengaruhi transformasi data",
    "opsi_c": "menentukan penyimpanan duplikat",
    "opsi_d": "mengidentifikasi entitas yang menyuplai",
    "jawaban": "D",
    "rationale": "Langkah awal DFD (Diagram Konteks) adalah mengidentifikasi entitas luar (terminator) yang memberikan masukan atau menerima keluaran dari sistem."
  },
  {
    "id": 93,
    "soal": "Model arsitektur yang memungkinkan aplikasi dan layanan terdistribusi dijaringan komputer adalah….",
    "opsi_a": "centralized",
    "opsi_b": "client-server",
    "opsi_c": "open-source",
    "opsi_d": "virtualization",
    "jawaban": "B",
    "rationale": "Arsitektur client-server membagi beban kerja antara penyedia layanan (server) dan peminta layanan (client) di dalam jaringan."
  },
  {
    "id": 94,
    "soal": "Fungsi dari perangkat lunak konstruksi gudang data (data warehouse) adalah....",
    "opsi_a": "menyimpan data",
    "opsi_b": "mengelola data",
    "opsi_c": "menghasilkan laporan",
    "opsi_d": "mengekstrak data yang relevan",
    "jawaban": "D",
    "rationale": "Perangkat lunak ini berfungsi dalam proses ETL (Extract, Transform, Load) untuk mengambil data yang relevan dari berbagai sumber."
  },
  {
    "id": 95,
    "soal": "Dalam proyek teknologi informasi, tidak adanya bug dalam aplikasi yang dikembangkan merupakan metrik....",
    "opsi_a": "biaya",
    "opsi_b": "waktu",
    "opsi_c": "ruang lingkup",
    "opsi_d": "kualitas",
    "jawaban": "D",
    "rationale": "Kualitas dalam proyek perangkat lunak diukur dari kesesuaian dengan persyaratan dan ketiadaan kesalahan (bug) pada produk."
  },
{
  "id": 96,
  "soal": "Dalam manajemen data, pemberian identitas atau label unik yang digunakan untuk membedakan satu elemen data atau kategori data dengan yang lainnya disebut....",
  "opsi_a": "pengenal (identifier)",
  "opsi_b": "definisi data",
  "opsi_c": "aturan integritas",
  "opsi_d": "skema penamaan (naming)",
  "jawaban": "A",
  "rationale": "Pengenal (Identifier) adalah label atau kunci unik yang digunakan untuk mengidentifikasi secara spesifik suatu entitas atau jenis data agar tidak tertukar dengan data lainnya."
},
  {
    "id": 97,
    "soal": "Prinsip bahwa data harus mencerminkan nilai yang sebenarnya dan tidak mengandung kesalahan dikenal dengan istilah....",
    "opsi_a": "lengkap",
    "opsi_b": "konsisten",
    "opsi_c": "akurasi",
    "opsi_d": "relevan",
    "jawaban": "C",
    "rationale": "Akurasi merujuk pada kebenaran informasi terhadap fakta lapangan yang direpresentasikan oleh data tersebut."
  },
  {
    "id": 98,
    "soal": "Pernyataan tentang masa depan yang diinginkan oleh organisasi dalam pengelolaan informasi adalah....",
    "opsi_a": "sasaran informasi",
    "opsi_b": "misi informasi",
    "opsi_c": "arsitektur teknologi informasi",
    "opsi_d": "visi informasi",
    "jawaban": "D",
    "rationale": "Visi adalah pandangan jauh ke depan mengenai cita-cita organisasi terkait penggunaan sistem dan teknologi informasi."
  },
  {
    "id": 99,
    "soal": "Komputer multi-user yang digunakan oleh perusahaan kecil untuk aplikasi komersial adalah....",
    "opsi_a": "superkomputer",
    "opsi_b": "mainframe komputer",
    "opsi_c": "mikrokomputer",
    "opsi_d": "minikomputer",
    "jawaban": "D",
    "rationale": "Minikomputer (atau server mid-range) memiliki kapasitas di atas PC biasa namun di bawah mainframe, cocok untuk bisnis menengah/kecil."
  },
  {
    "id": 100,
    "soal": "Keterbatasan pengukuran finansial/teknis pada proyek SI adalah pengabaian pada aspek....",
    "opsi_a": "sosial dan sumber daya manusia",
    "opsi_b": "sosial dan organisasional",
    "opsi_c": "sumber daya manusia dan organisasional",
    "opsi_d": "ekonomi dan lingkungan",
    "jawaban": "B",
    "rationale": "Pendekatan teknis sering melupakan bahwa keberhasilan sistem sangat bergantung pada struktur organisasi dan budaya sosial di dalamnya."
  },

   
];

// =========================================================================================
// 2. LOGIKA PROGRAM UNTUK FEEDBACK INSTAN
// =========================================================================================

let currentQuestionIndex = 0;
let correctCount = 0;
// Menyimpan jawaban pengguna: {questionId: 'A', ...}
let userAnswers = {}; 
// Menyimpan status soal yang sudah dijawab: {questionId: true, ...}
let answeredQuestions = {};

const totalQuestions = dataSoal.length;
const quizContainer = document.getElementById('quiz-container');
const questionArea = document.getElementById('question-area');
const nextBtn = document.getElementById('next-btn');
const feedbackArea = document.getElementById('feedback-area');
const scoreDisplay = document.getElementById('correct-count');
const nextBtnText = document.querySelector('#navigation-area button');


// Fungsi untuk memuat dan menampilkan soal
function loadQuestion(index) {
    if (index >= totalQuestions) {
        showFinalResult();
        return;
    }

    currentQuestionIndex = index;
    feedbackArea.style.display = 'none'; // Sembunyikan feedback
    feedbackArea.innerHTML = ''; 

    const question = dataSoal[index];

    const options = [
        { label: 'A', text: question.opsi_a },
        { label: 'B', text: question.opsi_b },
        { label: 'C', text: question.opsi_c },
        { label: 'D', text: question.opsi_d }
    ];

    let optionsHtml = '';
    options.forEach(opt => {
        const isChecked = userAnswers[question.id] === opt.label ? 'checked' : '';
        const isDisabled = answeredQuestions[question.id] ? 'disabled' : '';
        const customClass = answeredQuestions[question.id] ? 'option-answered' : '';
        
        optionsHtml += `
            <input type="radio" id="q${question.id}_${opt.label}" name="q${question.id}" value="${opt.label}" ${isChecked} ${isDisabled}
                   onclick="handleAnswer(${question.id}, '${opt.label}')">
            <label for="q${question.id}_${opt.label}" class="option-label ${customClass}" id="label_q${question.id}_${opt.label}">
                <strong>${opt.label}.</strong> ${opt.text}
            </label>
        `;
    });

    questionArea.innerHTML = `
        <h3 class="question-number">Soal ${index + 1} dari ${totalQuestions}</h3>
        <p class="question-text">${question.soal}</p>
        <div class="options-container">
            ${optionsHtml}
        </div>
    `;
    
    // Update tombol next
    nextBtnText.textContent = `Soal Selanjutnya (${index + 1}/${totalQuestions})`;
    nextBtn.disabled = !answeredQuestions[question.id]; // Nonaktifkan jika belum dijawab

    // Jika sudah dijawab, tampilkan kembali feedback dan highlight
    if (answeredQuestions[question.id]) {
        showFeedbackAndHighlight(question, userAnswers[question.id]);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk mencatat jawaban, memberikan feedback, dan highlight
function handleAnswer(questionId, selectedOption) {
    if (answeredQuestions[questionId]) return; // Cegah double-click
    
    userAnswers[questionId] = selectedOption;
    answeredQuestions[questionId] = true;
    const question = dataSoal.find(q => q.id === questionId);

    // 1. Cek Jawaban dan Hitung Skor
    const isCorrect = selectedOption === question.jawaban;
    if (isCorrect) {
        correctCount++;
    }
    scoreDisplay.textContent = correctCount;

    // 2. Tampilkan Feedback dan Highlight
    showFeedbackAndHighlight(question, selectedOption);

    // 3. Nonaktifkan semua radio button untuk soal ini
    document.getElementsByName(`q${questionId}`).forEach(radio => {
        radio.disabled = true;
    });

    // 4. Aktifkan tombol 'Selanjutnya'
    nextBtn.disabled = false;
    
    // Update tombol next text
    nextBtnText.textContent = `Soal Selanjutnya (${currentQuestionIndex + 1}/${totalQuestions})`;
}

function showFeedbackAndHighlight(question, selectedOption) {
    const isCorrect = selectedOption === question.jawaban;
    
    // Tampilkan pesan Benar/Salah
    feedbackArea.style.display = 'block';
    feedbackArea.className = isCorrect ? 'feedback-area feedback-correct' : 'feedback-area feedback-incorrect';
    
    const feedbackTitle = isCorrect ? 'Selamat, Jawaban Anda Benar!' : 'Maaf, Jawaban Anda Salah.';
    
    feedbackArea.innerHTML = `
        <h3>${feedbackTitle}</h3>
        <p>Jawaban yang Benar adalah <strong>${question.jawaban}</strong>.</p>
        <h4>Pembahasan:</h4>
        <p>${question.rationale}</p>
    `;

    // Highlight Opsi Jawaban
    const correctLabel = document.getElementById(`label_q${question.id}_${question.jawaban}`);
    
    // Hilangkan highlight sebelumnya (jika ada) dan tambahkan class answered
    document.getElementsByName(`q${question.id}`).forEach(radio => {
        const label = document.getElementById(`label_q${question.id}_${radio.value}`);
        label.classList.add('option-answered'); // Semua opsi sudah tidak bisa diklik
    });

    // Highlight jawaban yang benar (selalu hijau)
    if (correctLabel) {
        correctLabel.classList.add('correct-option');
    }
    
    // Jika salah, highlight jawaban pengguna (merah)
    if (!isCorrect) {
        const incorrectLabel = document.getElementById(`label_q${question.id}_${selectedOption}`);
        if (incorrectLabel) {
            incorrectLabel.classList.add('incorrect-option');
        }
    }
}


// Fungsi pindah ke soal berikutnya
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

// Fungsi untuk menampilkan hasil akhir
function showFinalResult() {
    quizContainer.style.display = 'none';
    const resultArea = document.getElementById('final-result-area');
    resultArea.style.display = 'block';

    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('final-correct-answers').textContent = correctCount;
    document.getElementById('final-score').textContent = correctCount; // Skor = Jumlah Benar

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Inisialisasi: Muat soal pertama saat halaman selesai dimuat
window.onload = function() {
    if (totalQuestions > 0) {
        loadQuestion(currentQuestionIndex);
    }
};
