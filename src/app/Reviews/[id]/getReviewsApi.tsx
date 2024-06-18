export interface ReviewData {
    productId: string;
    reviewId: string;
    customer: string;
    productName: string;
    comment: string;
    
   
  }
  
  export default async function getReview(productId: string): Promise<ReviewData> {
  
    console.log("gets called")
          const res = await fetch( `http://localhost:8080/reviews/${productId}`)
          if (!res.ok) {
              throw new Error(`failed to fetch user ${productId}`)
          }
  
          return res.json() as Promise<ReviewData>
      }
  