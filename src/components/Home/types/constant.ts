// Define types for Open Graph images and Twitter metadata
interface OpenGraphImage {
    url: string;
    alt: string;
  }
  
 export interface TwitterMeta {
    card: string;
    site: string;
    title: string;
    description: string;
    image: string;
  }
  
  // Define types for home SEO data
 export interface HomeSeoData {
    title: string;
    description: string;
    keywords: string;
    openGraph: {
      title: string;
      description: string;
      images: OpenGraphImage[];
    };
    robots: string;
    alternates: {
      canonical: string;
    };
    twitter: TwitterMeta;
  }
  
  // Define types for navigation items
 export interface NavItem {
    text: string;
    ref: string;
  }

  // Define types for home section
 export interface HomeMachineSection {
    title: string;
    subheading: string;
  }
  // Define types for hero section
 export interface HeroSection {
    [x: string]: any;
    video: {
      sources: {
        src: string;
        type: string;
      }[];
      poster: string;
    };
    image: { src: string }[];
    textOverlay: {
      headline: string;
      subheadline: string;
    };
    buttonText: string;
  }

  type ProductSection = {
    category: "ProductSection";
    data: {
      products: Product[];
    };
  };
  
  type Product = {
    category: string; // e.g., "cup"
    firstname: string; // e.g., "Servo Driven"
    secondname: string; // e.g., "Paper Cup Machine"
    description: string; // detailed description of the product
    image: string; // URL of the product image
    title: string; // e.g., "Servo Driven Machine"
    speed: string; // e.g., "100"
    unit: string; // e.g., "PCS/MIN"
    icon: string; // URL of the icon image
    items: Item[]; // list of item descriptions
  };
  
  type Item = {
    className: string; // CSS class for styling
    text: string; // descriptive text
  };
  
  // Define types for brands section
 export interface Brand {
    src: string;
    alt: string;
  }

 export interface BrandsSection {
    trusted: Brand[];
    partners: Brand[];
    heading1: string;
    heading2: string;
    description: {
      heading: string;
      text: string;
    };
  }

  // Define types for know more section
 export interface KnowMoreItem {
    title: string;
    description: string;
    src: string;
    link: string;
    color: string;
    expertiseExperience: string;
    expertiseAbout: string;
    icon: string;
  }

 export interface KnowMoreSection {
    knowmore: KnowMoreItem[];
  }
  
  // Define types for news feature section
 export interface NewsFeatureItem {
    title: string;
    description: string;
    image: string;
    alt: string;
  }
  
 export interface NewsFeature {
    newsData: NewsFeatureItem[];
    heading: string;
    subheading: string;
  }
  
  // Define types for testimonial items
 export interface TestimonialItem {
    src: string;
    username: string;
    profile: string;
    country: string;
    quote: string;
    flag: string;
  }
  
 export interface TestimonialVideo {
    src: string;
    youtubeLink: string;
  }
  
 export interface TestimonialSection {
    testinomial: TestimonialItem[];
    Testinomialvideos: TestimonialVideo[];
    heading: string;
    subheading: string;
    secondsubheading: string;
    thirdsubheading: string;
    description: string;
  }
  
  // Main HomeData type that encompasses all categories
 export interface HomeData {
    home: Array<{
      homeSeoData?: HomeSeoData;
      homeMachineSection?: HomeMachineSection;
      data: HeroSection;
      productData:ProductSection;
      brandSection:BrandsSection;
      knowmoreSection:KnowMoreItem;
      newsFeatureSection:NewsFeatureItem;
      testinomialSection:TestimonialItem
    }>;
  }
  