export async function getTasks() {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}