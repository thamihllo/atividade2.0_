// 01 // Classe que simula o localStorage no Node.js do Stackblitz
// 02 // Definida na pasta "/pessoas/DAOs/localStorage.mjs" 

export const localStorage = {                    
  store: {},                                     

  setItem(key, value) {                          
    this.store[key] = value;                     
  },

  getItem(key) {                                 
    return this.store[key] || null;              
  },

  removeItem(key) {                              
    delete this.store[key];                      
  },

  clear() {                                      
    this.store = {};                             
  }

};                      

export default localStorage;