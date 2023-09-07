import { useEffect, useState } from "react";
import { Parser } from "xml2js";

function createData(
  id: number,
  name: string,
  description: string,
  level: string,
  cve: string,
  cvss: number,
  solution: string,
  os: string,
  riskLevel: number
) {
  return {
    id,
    name,
    description: "Unknown",
    // ... default values for other fields
    level: "Medium",
    cve: "CVE-XXXX-XXXX",
    cvss: 6.5,
    solution: "Unknown",
    os: "Unknown",
    riskLevel: 5,
    details: [
      {
        date: new Date().toISOString().split("T")[0], // Example: setting current date
        description: name,
        cvss: 7.6,
        riskLevel: 6,
      },
      // Add other default details or modify as necessary
    ],
  };
}

const RssFetcher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      const RSS_URL =
        "https://wid.cert-bund.de/content/public/securityAdvisory/rss";

      const parser = new Parser();
      const feed = await parser.parseURL(CORS_PROXY + RSS_URL);

      const formattedData = feed.items.map(
        (
          item: { title: string; contentSnippet: any; content: any },
          index: number
        ) =>
          createData(
            item.id,
            item.title,
            item.link,
            item.description,
            item.category,
            item.pubDate

            // Add other relevant fields from the RSS feed
          )
      );

      setData(formattedData);
    };

    fetchData();
  }, []);

  return <ColTab2 rows={data} />;
};
