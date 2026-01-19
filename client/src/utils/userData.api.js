 export const getAccountData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          "http://localhost:8000/api/donor/account",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data;
        }
      } catch (error) {
        console.error(error);
      }
    };
   