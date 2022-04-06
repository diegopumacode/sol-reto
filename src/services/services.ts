const ENDPOINT: string = 'http://localhost:8080/services'

export interface Service {
    id: number,
    name: string,
    description: string,
    type: "autos" | "salud" | "hogar"
}

export const getAllServices = async (type:string = ""):Promise<Service[]> => {
    const response = await fetch(`${ENDPOINT}${type == "" ?"":`?type=${type}`}`)

    if (!response.ok) {
        throw new Error("Something went wrong.");
    }

    return response.json();
};

export const createService = async (data:{}) => {
    const response = await fetch(`${ENDPOINT}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    
    if (!response.ok) {
        throw new Error("Something went wrong.");
    }

    return response.json();
};

export const updateService = async (data:Service) => {
    const response = await fetch(
        `${ENDPOINT}/${data.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        throw new Error("Something went wrong.");
    }

    return response.json();
};

export const delService = async (id:number) => {
    
    const response = await fetch(
        `${ENDPOINT}/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    if (!response.ok) {
        throw new Error("Something went wrong.");
    }
    return response.json();
};