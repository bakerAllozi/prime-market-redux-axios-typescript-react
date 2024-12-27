import supabase from "./supabase";

export async function getBaker() {
  const { data, error } = await supabase.from("randomData").select("*");
  if (error) {
    console.error(error);
    throw new Error("bakeroooooerrerer");
  }
  return data;
}
