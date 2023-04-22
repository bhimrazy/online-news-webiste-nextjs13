export type Article = {
  title: string;
  excerpt: string;
  image?: string;
  description: string;
  createdAt: string;
  author?: {
    name: string;
    image: string;
  };
  tags: string[];
  category: string;
};

const news: { [category: string]: Article[] } = {
  politics: [],
  business: [],
  tech: [],
  arts: [
    {
      title: "NFT Artwork for $12 Million",
      excerpt:
        "The anonymous artist known as Banksy has entered the world of NFTs, selling a digital artwork titled “Spike” for a record-breaking $12 million.",
      image:
        "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "The NFT, or non-fungible token, represents a unique digital asset that is verified on the blockchain. Banksy's “Spike” depicts a cartoon rat holding a sign that reads “I can't believe you morons actually buy this NFT shit.” The sale has sparked controversy among the art community, with some questioning the value of digital art and the environmental impact of NFTs.",
      createdAt: "2023-04-22T12:00:00Z",
      author: {
        name: "Jane Doe",
        image:
          "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      tags: ["art", "NFT", "Banksy"],
      category: "Contemporary Art",
    },
    {
      title: "Museum of Modern Art in New York",
      excerpt:
        "The Museum of Modern Art in New York has acquired a significant collection of African-American art, including works by renowned artists such as Romare Bearden and Kara Walker.",
      description:
        "The collection, donated by philanthropists Charles and Valerie Diker, features over 400 works spanning a century of African-American art. The acquisition is part of the museum's ongoing effort to diversify its collection and provide a more inclusive narrative of art history.",
      createdAt: "2023-04-22T08:00:00Z",

      tags: ["art", "African-American art", "Museum of Modern Art"],
      category: "Museums",
    },

    {
      title: "Virtual Art Exhibitions Gain Popularity Amid Pandemic",
      excerpt:
        "Art galleries and museums around the world have turned to virtual exhibitions in the wake of the COVID-19 pandemic, allowing art enthusiasts to experience art from the safety and comfort of their own homes. The trend has also opened up new opportunities for artists to showcase their work to a global audience without the limitations of physical space. ",
      image:
        "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "The trend has also opened up new opportunities for artists to showcase their work to a global audience without the limitations of physical space. While virtual exhibitions cannot replace the immersive experience of viewing art in person, they have provided a lifeline for the art industry during a challenging time.",
      createdAt: "2023-04-21T15:30:00Z",
      tags: ["art", "virtual exhibitions", "COVID-19"],
      category: "Art Exhibitions",
    },
    {
      title: "National Portrait Gallery Unveils New Portrait",
      excerpt:
        "The National Portrait Gallery in Washington, D.C. has unveiled a new portrait of Vice President Kamala Harris, painted by artist Amy Sherald.",
      image:
        "https://images.unsplash.com/photo-1614194405012-0414d157cee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description:
        "Sherald, who also painted Michelle Obama's official portrait, depicts Harris in a pose that exudes confidence and power, wearing a classic black blazer and a string of pearls. The portrait was commissioned by the National Portrait Gallery and is the first official portrait of Harris since she took office.",
      createdAt: "2023-04-21T23:00:00Z",
      tags: ["art", "National Portrait Gallery", "Kamala Harris"],
      category: "Fine Art",
    },
  ],
  science: [],
  health: [],
  sports: [],
};

export function getNews(category: string) {
  const all = news[category];
  if (all.length > 0) {
    return all;
  }
  return null;
}
