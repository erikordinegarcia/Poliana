export type PaymentMethod = "pix" | "cartao" | "boleto";

export interface CreateOrderPayload {
  bookId: string;
  paymentMethod: PaymentMethod;
  amount: number;
}

export interface CreateOrderResponse {
  orderId: string;
  status: "pending" | "paid";
  message?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim() || "";

export const createOrder = async (payload: CreateOrderPayload): Promise<CreateOrderResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Não foi possível criar o pedido.");
  }

  return response.json() as Promise<CreateOrderResponse>;
};
