export interface AnimeData{
    title: string,
    anime_type: string,
    plot_summary: string,
    genre: string[],
    released: string,
    status: string,
    other_names: string, 
    image: string
}

export interface CardProps extends AnimeData {
    className?: string;
  }