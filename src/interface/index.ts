export interface Episode {
  aliases: null | string[];
  api_detail_url: string;
  air_date: string;
  date_added: string;
  date_last_updated: string;
  deck: null | string;
  description: string;
  has_staff_review: boolean;
  id: number;
  image: Image;
  episode_number: string;
  name: string;
  site_detail_url: string;
  series: Series;
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

interface Series {
  api_detail_url: string;
  id: number;
  name: string;
  site_detail_url: string;
}
