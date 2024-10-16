export interface Comic {
  aliases: null | string[];
  api_detail_url: string;
  cover_date: string;
  date_added: string;
  date_last_updated: string;
  deck: null | string;
  description: string;
  has_staff_review: boolean;
  id: number;
  image: Image;
  associated_images: any[];
  issue_number: string;
  name: string;
  site_detail_url: string;
  store_date: string;
  volume: Volume;
}

interface Image {
  icon_url: string;
  medium_url: string;
  screen_url: string;
  screen_large_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
  original_url: string;
  image_tags: string;
}

interface Volume {
  api_detail_url: string;
  id: number;
  name: string;
  site_detail_url: string;
}
