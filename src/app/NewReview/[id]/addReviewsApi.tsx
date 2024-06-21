export interface addReviewData {
    productId: string;
    reviewId: string;
    customer: string;
    productName: string;
    comment: string;
    
   
  }


    export const createReview = async (productId: string, customer: string, comment: string) => {
      const datas = { productId, customer, comment };
      const response = await fetch(`http://localhost:8080/reviews/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datas),
      });
      return response.json();
      
    };