const blogs = [
  {
    id: 1,
    title: "Understanding the Basics of Data Analytics",
    imageUrl:
      "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
        Data analytics is the process of examining data sets to draw conclusions about the information they contain. 
        It involves a range of techniques to analyze raw data, from statistical analysis to complex algorithms. 
        
        Data analytics can help businesses make better decisions, improve efficiency, and gain a competitive edge. 
        For example, by analyzing customer behavior data, companies can tailor their products and marketing strategies to meet customer needs.
        
        Some key terms in data analytics include descriptive analytics, predictive analytics, and prescriptive analytics. 
        Descriptive analytics focuses on understanding past data, predictive analytics uses data to forecast future outcomes, 
        and prescriptive analytics recommends actions to take based on data analysis. 
        
        Whether you're in marketing, finance, healthcare, or any other field, data analytics can provide valuable insights to improve performance and decision-making.
        `,
  },
];

export const getPost = (id) => {
  return blogs.find((blog) => blog.id);
};
