import { Client, Databases, ID, Query} from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(PROJECT_ID);


const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    // Implement the logic to update the search count in Appwrite

    // 1. Use Appwrite SDK to check if the search term already exists in the database.
    try {
        const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
            // Query to find document by searchTerm
            Query.equal("searchTerm", searchTerm)
        ])
    
        if(result.documents.length > 0) {
            const doc = result.documents[0];
            // Increment the count
            await database.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
                count: doc.count + 1
            });
        } else {
            await database.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
                searchTerm: searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : './no-movie.png',
            });
        }

    } catch (error) {
        console.error("Error checking search term:", error);
    }
    // 2. If it exists, increment the count.
    // 3. If it doesn't exist, create a new record with count set to 1.
};


export const getTrendingMovies = async () => {
    try {
        const response = await database.listDocuments(DATABASE_ID, TABLE_ID, [
            Query.orderDesc("count"),
            Query.limit(5)
        ]);
        return response.documents;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
};