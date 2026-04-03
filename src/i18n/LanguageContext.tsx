import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Simple translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations[language];
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Inline translations for simplicity and speed
export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      tech: 'Tech',
      projects: 'Projects',
      contact: 'Contact',
      cvEn: 'CV (EN)',
      cvId: 'CV (ID)'
    },
    hero: {
      title: 'Software Engineer',
      desc: '2+ years of hands-on experience building event-driven microservices, optimizing databases, and untangling legacy codebases for enterprise clients like PT KAI, PT SMI, and Bank Victoria.',
      explore: 'Explore My Work',
      contact: 'Contact Me',
      downloadEn: 'Download CV (English)',
      downloadId: 'Download CV (Indonesia)'
    },
    about: {
      title: 'About Me',
      subtitle: 'Professional summary and core focus areas.',
      desc1: 'I am a Software Engineer directly involved in enterprise projects for clients including PT Kereta Api Indonesia (KAI), PT Sarana Multi Infrastruktur (SMI), and Bank Victoria.',
      desc2: 'My day-to-day work covers Java Spring Boot, Kafka, PostgreSQL, Redis, Docker, and Kubernetes. I focus on building scalable systems, optimizing database queries, and ensuring high-performance backend architectures.',
      desc3: 'Currently pursuing a Bachelor\'s Degree in Computer Science at Binus University (Expected 2026), building upon my Associate Degree in Application Software Engineering from Universitas Telkom.',
      focus: {
        backend: 'Backend Systems',
        backendDesc: 'Java Spring Boot, RESTful APIs, and legacy system refactoring.',
        event: 'Event-Driven Architecture',
        eventDesc: 'Apache Kafka for asynchronous messaging and decoupled services.',
        db: 'Database Optimization',
        dbDesc: 'PostgreSQL tuning, Redis caching, and complex query optimization.',
        infra: 'DevOps & Infrastructure',
        infraDesc: 'Docker containerization and Kubernetes deployments.'
      }
    },
    experience: {
      title: 'Experience & Education',
      subtitle: 'My professional journey and academic background.',
      workTitle: 'Work Experience',
      orgTitle: 'Organizational Experience',
      eduTitle: 'Education',
      padepokan: {
        title: 'Software Engineer',
        company: 'PT Padepokan Tujuh Sembilan (Padepokan 79)',
        location: 'Bandung, Indonesia',
        period: 'January 2023 – March 2026',
        points: [
          'Built and maintained production backend systems across enterprise projects in 2 years, spanning fintech, railway operations, and banking domains.',
          'Core stack: Java Spring Boot and Go — consistently assigned to high-complexity modules including event-driven messaging, legacy refactoring, and data migration.',
          'Worked directly with enterprise clients: PT Sarana Multi Infrastruktur (SMI), PT Kereta Api Indonesia (KAI), and Bank Victoria.',
          'Enforced code quality through SonarQube analysis, Swagger API documentation, and structured DTO validation pipelines.',
          'Contributed to DevOps workflows: Docker containerization, Kubernetes deployment environments, and Jenkins CI/CD pipelines.'
        ]
      },
      hima: {
        title: 'Head of Internal Department',
        company: 'D3 Application Software Engineering Student Association',
        location: 'Universitas Telkom, Bandung',
        period: 'January 2022 – January 2023',
        points: [
          'Coordinated all members and work programs of the internal department — team management, scheduling, and ensuring alignment between program activities and organizational goals.'
        ]
      },
      binus: {
        degree: 'Bachelor\'s Degree (S1) – Computer Science',
        school: 'Universitas Bina Nusantara (Binus)',
        period: 'Graduating 2026',
        details: 'GPA: 3.58 / 4.00. Thesis: Application of the Decision Tree Algorithm in a Mobile App to Predict Consumer Interest in Skincare Products.'
      },
      telkom: {
        degree: 'Associate Degree (D3) – Application Software Engineering',
        school: 'Universitas Telkom',
        period: 'Graduated 2023',
        details: 'GPA: 3.84 / 4.00. Final Project: SMAFE – IoT-based smart fish feeding system (Python Flask REST API, C++/Arduino, Kotlin Android).'
      },
      bangkit: {
        degree: 'Android Mobile Development',
        school: 'Bangkit Academy (Google, GoTo, Traveloka)',
        period: 'Feb 2023 – Jul 2023',
        details: 'Final Score: 89.12 / 100.00. Official independent study program certified by Indonesia\'s Ministry of Education.'
      }
    },
    tech: {
      title: 'Technical Arsenal',
      subtitle: 'Technologies and tools I use to build scalable systems.',
      categories: {
        lang: 'Languages',
        framework: 'Frameworks',
        db: 'Databases & ORM',
        api: 'API & Security',
        devops: 'DevOps & Infra',
        arch: 'Architecture & Testing'
      }
    },
    projects: {
      title: 'Project Experience',
      subtitle: 'Enterprise systems, data migrations, and event-driven architectures.',
      p1: {
        title: 'Loan Origination System (LOS)',
        client: 'PT Sarana Multi Infrastruktur (SMI)',
        period: 'Nov 2025 – Mar 2026',
        desc: 'Architected decentralized event-driven microservices using Kafka for async event processing and OpenFeign for synchronous inter-service communication. Refactored undocumented legacy codebase into clean microservices.'
      },
      p2: {
        title: 'TRAINPLAN – Railway Schedule Management',
        client: 'PT Kereta Api Indonesia (KAI)',
        period: 'Apr 2025 – Oct 2025',
        desc: 'Led backend migration of a live legacy CodeIgniter system to Spring Boot 3 with zero disruption. Rebuilt core business logic for train dispatching, scheduling accuracy, and preventing slot conflicts.'
      },
      p3: {
        title: 'Company Portal (COMPOR)',
        client: 'PT Padepokan Tujuh Sembilan',
        period: 'Oct 2024 – Nov 2024',
        desc: 'Built RESTful APIs with pagination, dynamic filtering, and relational data management for HR, document management, and task-tracking. Implemented JWT auth with NestJS in-memory caching.'
      },
      p4: {
        title: 'Victoria IBMB – Internet & Mobile Banking',
        client: 'Bank Victoria',
        period: 'Aug 2024 – Sep 2024',
        desc: 'Executed large-scale financial data migration from Excel files into PostgreSQL with zero data loss and full integrity across complex relational structures. Debugged critical import/export issues.'
      },
      p5: {
        title: 'Aeroswift – Airline Ticket Booking App',
        client: 'Synrgy Academy x Binar Bootcamp',
        period: 'Dec 2023 – Feb 2024',
        desc: 'Integrated Xendit and Stripe payment gateways with webhook callbacks and idempotent payment state management. Built automated PDF invoice generation and real-time push notifications.'
      }
    },
    principles: {
      title: 'Engineering Principles',
      subtitle: 'Core tenets that guide my architectural decisions.',
      p1: {
        title: 'Design for Scalability',
        desc: 'Designing systems that can handle increased load by adding resources, utilizing horizontal scaling and stateless services.'
      },
      p2: {
        title: 'Build Resilient Systems',
        desc: 'Implementing circuit breakers, retries, and fallbacks to ensure the system remains operational during partial failures.'
      },
      p3: {
        title: 'Optimize for Performance',
        desc: 'Optimizing database queries, implementing caching strategies, and reducing latency for high-throughput APIs.'
      },
      p4: {
        title: 'Embrace Event Driven Architecture',
        desc: 'Utilizing asynchronous communication and message brokers to build decoupled, highly available systems.'
      }
    },
    contact: {
      title: 'Let\'s Build',
      titleHighlight: 'Together',
      desc: 'Currently open for new opportunities. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
      sayHi: 'Say Hello',
      rights: 'All rights reserved.',
      built: 'Designed & Built with',
      precision: 'Precision'
    }
  },
  id: {
    nav: {
      about: 'Tentang',
      experience: 'Pengalaman',
      tech: 'Teknologi',
      projects: 'Proyek',
      contact: 'Kontak',
      cvEn: 'CV (EN)',
      cvId: 'CV (ID)'
    },
    hero: {
      title: 'Software Engineer',
      desc: 'Berpengalaman 2+ tahun membangun microservices berbasis event-driven, mengoptimalkan database, dan merombak kode legacy untuk klien enterprise seperti PT KAI, PT SMI, dan Bank Victoria.',
      explore: 'Lihat Portofolio',
      contact: 'Hubungi Saya',
      downloadEn: 'Unduh CV (Inggris)',
      downloadId: 'Unduh CV (Indonesia)'
    },
    about: {
      title: 'Tentang Saya',
      subtitle: 'Ringkasan profesional dan area fokus utama.',
      desc1: 'Saya adalah seorang Software Engineer yang terlibat langsung dalam proyek enterprise untuk klien seperti PT Kereta Api Indonesia (KAI), PT Sarana Multi Infrastruktur (SMI), dan Bank Victoria.',
      desc2: 'Pekerjaan sehari-hari saya meliputi Java Spring Boot, Kafka, PostgreSQL, Redis, Docker, dan Kubernetes. Saya fokus membangun sistem yang skalabel, mengoptimalkan query database, dan memastikan arsitektur backend berkinerja tinggi.',
      desc3: 'Saat ini sedang menempuh pendidikan S1 Ilmu Komputer di Universitas Bina Nusantara (Lulus 2026), melanjutkan pendidikan D3 Rekayasa Perangkat Lunak Aplikasi dari Universitas Telkom.',
      focus: {
        backend: 'Sistem Backend',
        backendDesc: 'Java Spring Boot, RESTful API, dan refactoring sistem legacy.',
        event: 'Arsitektur Event-Driven',
        eventDesc: 'Apache Kafka untuk pesan asinkron dan layanan terpisah (decoupled).',
        db: 'Optimasi Database',
        dbDesc: 'Tuning PostgreSQL, caching Redis, dan optimasi query kompleks.',
        infra: 'DevOps & Infrastruktur',
        infraDesc: 'Kontainerisasi Docker dan deployment Kubernetes.'
      }
    },
    experience: {
      title: 'Pengalaman & Pendidikan',
      subtitle: 'Perjalanan karir dan latar belakang akademis saya.',
      workTitle: 'Pengalaman Kerja',
      orgTitle: 'Pengalaman Organisasi',
      eduTitle: 'Pendidikan',
      padepokan: {
        title: 'Software Engineer',
        company: 'PT Padepokan Tujuh Sembilan (Padepokan 79)',
        location: 'Bandung, Indonesia',
        period: 'Januari 2023 – Maret 2026',
        points: [
          'Membangun dan memelihara sistem backend produksi di berbagai proyek enterprise selama 2 tahun, mencakup domain fintech, operasional kereta api, dan perbankan.',
          'Tech stack utama: Java Spring Boot dan Go — secara konsisten ditugaskan pada modul kompleksitas tinggi termasuk messaging event-driven, refactoring legacy, dan migrasi data.',
          'Bekerja langsung dengan klien enterprise: PT Sarana Multi Infrastruktur (SMI), PT Kereta Api Indonesia (KAI), dan Bank Victoria.',
          'Menjaga kualitas kode melalui analisis SonarQube, dokumentasi Swagger API, dan pipeline validasi DTO terstruktur.',
          'Berkontribusi pada alur kerja DevOps: Kontainerisasi Docker, lingkungan deployment Kubernetes, dan pipeline CI/CD Jenkins.'
        ]
      },
      hima: {
        title: 'Kepala Departemen Internal',
        company: 'Himpunan Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi',
        location: 'Universitas Telkom, Bandung',
        period: 'Januari 2022 – Januari 2023',
        points: [
          'Mengkoordinasikan seluruh anggota dan program kerja departemen internal — manajemen tim, penjadwalan, dan memastikan keselarasan antara aktivitas program dengan tujuan organisasi.'
        ]
      },
      binus: {
        degree: 'Sarjana (S1) – Ilmu Komputer',
        school: 'Universitas Bina Nusantara (Binus)',
        period: 'Lulus 2026',
        details: 'IPK: 3.58 / 4.00. Skripsi: Penerapan Algoritma Decision Tree pada Aplikasi Mobile untuk Memprediksi Minat Konsumen terhadap Produk Skincare.'
      },
      telkom: {
        degree: 'Ahli Madya (D3) – Rekayasa Perangkat Lunak Aplikasi',
        school: 'Universitas Telkom',
        period: 'Lulus 2023',
        details: 'IPK: 3.84 / 4.00. Tugas Akhir: SMAFE – Sistem pemberian pakan ikan pintar berbasis IoT (Python Flask REST API, C++/Arduino, Kotlin Android).'
      },
      bangkit: {
        degree: 'Pengembangan Mobile Android',
        school: 'Bangkit Academy (Google, GoTo, Traveloka)',
        period: 'Feb 2023 – Jul 2023',
        details: 'Nilai Akhir: 89.12 / 100.00. Program studi independen bersertifikat resmi dari Kementerian Pendidikan Indonesia.'
      }
    },
    tech: {
      title: 'Senjata Teknis',
      subtitle: 'Teknologi dan alat yang saya gunakan untuk membangun sistem.',
      categories: {
        lang: 'Bahasa Pemrograman',
        framework: 'Framework',
        db: 'Database & ORM',
        api: 'API & Keamanan',
        devops: 'DevOps & Infra',
        arch: 'Arsitektur & Testing'
      }
    },
    projects: {
      title: 'Pengalaman Proyek',
      subtitle: 'Sistem enterprise, migrasi data, dan arsitektur event-driven.',
      p1: {
        title: 'Sistem Originasi Pinjaman (LOS)',
        client: 'PT Sarana Multi Infrastruktur (SMI)',
        period: 'Nov 2025 – Mar 2026',
        desc: 'Merancang microservices event-driven terdesentralisasi menggunakan Kafka untuk pemrosesan event asinkron dan OpenFeign untuk komunikasi antar-layanan sinkron. Melakukan refactoring kode legacy yang tidak terdokumentasi menjadi microservices yang bersih.'
      },
      p2: {
        title: 'TRAINPLAN – Manajemen Jadwal Kereta',
        client: 'PT Kereta Api Indonesia (KAI)',
        period: 'Apr 2025 – Okt 2025',
        desc: 'Memimpin migrasi backend sistem legacy CodeIgniter yang sedang live ke Spring Boot 3 tanpa gangguan. Membangun ulang logika bisnis inti untuk pengiriman kereta, akurasi penjadwalan, dan mencegah konflik slot.'
      },
      p3: {
        title: 'Portal Perusahaan (COMPOR)',
        client: 'PT Padepokan Tujuh Sembilan',
        period: 'Okt 2024 – Nov 2024',
        desc: 'Membangun RESTful API dengan paginasi, pemfilteran dinamis, dan manajemen data relasional untuk SDM, manajemen dokumen, dan pelacakan tugas. Mengimplementasikan otentikasi JWT dengan caching in-memory NestJS.'
      },
      p4: {
        title: 'Victoria IBMB – Internet & Mobile Banking',
        client: 'Bank Victoria',
        period: 'Agt 2024 – Sep 2024',
        desc: 'Mengeksekusi migrasi data finansial skala besar dari file Excel ke PostgreSQL tanpa kehilangan data dan integritas penuh di seluruh struktur relasional yang kompleks. Men-debug masalah impor/ekspor kritis.'
      },
      p5: {
        title: 'Aeroswift – Aplikasi Pemesanan Tiket Pesawat',
        client: 'Synrgy Academy x Binar Bootcamp',
        period: 'Des 2023 – Feb 2024',
        desc: 'Mengintegrasikan gateway pembayaran Xendit dan Stripe dengan callback webhook dan manajemen status pembayaran idempoten. Membangun pembuatan faktur PDF otomatis dan notifikasi push real-time.'
      }
    },
    principles: {
      title: 'Prinsip Rekayasa',
      subtitle: 'Prinsip inti yang memandu keputusan arsitektur saya.',
      p1: {
        title: 'Desain untuk Skalabilitas',
        desc: 'Merancang sistem yang dapat menangani peningkatan beban dengan menambahkan sumber daya, memanfaatkan penskalaan horizontal dan layanan stateless.'
      },
      p2: {
        title: 'Bangun Sistem yang Tangguh',
        desc: 'Mengimplementasikan circuit breaker, retry, dan fallback untuk memastikan sistem tetap beroperasi selama kegagalan parsial.'
      },
      p3: {
        title: 'Optimasi Performa',
        desc: 'Mengoptimalkan query database, menerapkan strategi caching, dan mengurangi latensi untuk API dengan throughput tinggi.'
      },
      p4: {
        title: 'Arsitektur Event Driven',
        desc: 'Memanfaatkan komunikasi asinkron dan message broker untuk membangun sistem yang decoupled dan ketersediaan tinggi (high availability).'
      }
    },
    contact: {
      title: 'Mari Membangun',
      titleHighlight: 'Bersama',
      desc: 'Saat ini terbuka untuk peluang baru. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda!',
      sayHi: 'Sapa Saya',
      rights: 'Hak cipta dilindungi undang-undang.',
      built: 'Dirancang & Dibangun dengan',
      precision: 'Presisi'
    }
  }
};
