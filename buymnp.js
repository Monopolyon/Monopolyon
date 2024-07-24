const sale_contract_addres = "0xC9155Ec730dD403349D568E16dD7282591e5CD0F";

const sale_contract_ABI = [
  {
    inputs: [],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "setExchangeRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_account",
        type: "address",
      },
    ],
    name: "setReceivingWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "setTokenContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensSold",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recepient",
        type: "address",
      },
    ],
    name: "withdrawBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recepient",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "calculateAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receivingWallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "soldTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const MNP_contract_address = '0xd830eee9d9f2402d0621382047c6c7aa13dd726f';

const MNP_contract_ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        }
      ],
      "name": "getBatchBalances",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
];

const saver_contract_address = '0x7b36DF8EE6d8b721f7d2692B4B912f73913E0030';

const saver_contract_ABI = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			}
		],
		"name": "getBatchData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "motto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "link",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "logo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "flex",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "color",
						"type": "string"
					}
				],
				"internalType": "struct DataSaver.Data[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "date",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "motto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "link",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "logo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "flex",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "color",
						"type": "string"
					}
				],
				"internalType": "struct DataSaver.Data",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "motto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "link",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "logo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "flex",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "color",
						"type": "string"
					}
				],
				"internalType": "struct DataSaver.InputData",
				"name": "data",
				"type": "tuple"
			}
		],
		"name": "saveData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

function Chek_Metamask(){
    if (typeof window.ethereum != 'undefined') {
      return true;
    } 
    if (typeof window.ethereum == 'undefined') {
      
      return false;
    };       
};

async function Change_Chain(control){
  
    const current_chain = await window.ethereum.request({
      "method": "eth_chainId",
      "params": []
    });
  
    if(current_chain != chain_id_hex){
  
      const bsc_chain ='0x' + Number(chain_id_number).toString(16); 
      try{
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params:[{chainId:bsc_chain}]
        });
        return true;
      }
      catch(e){
  
        if(e['message']=='Unrecognized chain ID "0x38". Try adding the chain using wallet_addEthereumChain first.'){
          Tooltip_Connect_Btn_Show(control,"Add BNB Chain network first");
        };
        return false;
        
      };  
    };
    if(current_chain === chain_id_hex){
      return true;
    };      
};

function Tooltip_Connect_Btn_Show(control, text){
    let children = control.find('.connect_btn_tool');  
    children.text(text);   
    children.css("visibility", "visible");  
    setTimeout(() => {  children.css("visibility", "hidden"); }, 2000);    
};

const chain_id_number = 56;

const chain_id_hex = '0x38';

const price = 1155000;

const final = 123900000;

function Chek_Metamask() {
  if (typeof window.ethereum != "undefined") {
    return true;
  }
  if (typeof window.ethereum == "undefined") {
    return false;
  }
}

async function Change_Chain(control) {
  const current_chain = await window.ethereum.request({
    method: "eth_chainId",
    params: [],
  });  

  if (current_chain != chain_id_hex) {
    const bsc_chain = "0x" + Number(chain_id_number).toString(16);
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: bsc_chain }],
      });
      return true;
    } catch (e) {
      if (
        e["message"] ==
        'Unrecognized chain ID "0x38". Try adding the chain using wallet_addEthereumChain first.'
      ) {
        Tooltip_Connect_Btn_Show(control, "Add BNB Chain network first");
      }
      return false;
    }
  }
  if (current_chain === chain_id_hex) {
    return true;
  }
}

function Tooltip_Connect_Btn_Show(control, text) {
  let children = control.find(".connect_btn_tool");
  children.text(text);
  children.css("visibility", "visible");
  setTimeout(() => {
    children.css("visibility", "hidden");
  }, 2000);
}

async function Get_Count_Saled_MNP() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const contract = new ethers.Contract(
    sale_contract_addres,
    sale_contract_ABI,
    provider
  );

  const ret = parseInt(await contract.soldTokens()) / 1000000000;  

  return ret;
}

function Disconect() {
  $("#conn_text").text("Connect MetaMask");
  Hide_Buy_MNP_Btn();
  Show_Connect_Btn();
}

function Copy_To_Сlipboard(target) {
  let temp_str = target.trim();
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(temp_str).select();
  document.execCommand("copy");
  $temp.remove();
}

async function Login_Metamask(control) {
  let accounts;

  try {
    accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (err) {
    Disconect();
    Tooltip_Connect_Btn_Show(control, "Login To MetaMask");
  }
  if (!accounts) {
    return;
  }
  return accounts[0];
}

function Tooltip_Connect_Btn_Show(control, text) {
  let children = control.find(".connect_btn_tool");
  children.text(text);
  children.css("visibility", "visible");
  setTimeout(() => {
    children.css("visibility", "hidden");
  }, 2000);
}

function Slice_Wallet(account) {
  let temp = account.slice(0, 6);
  temp = temp + "...." + account.slice(-4);
  return temp;
}

function Set_Wallet_Text_To_Connect_Btn(text) {
  $("#conn_text").text(text);
}

async function Run_Connect(control) {
  let account;
  if (Chek_Metamask()) {
    if (!(await window.ethereum._metamask.isUnlocked())) {
      Disconect();
    }

    account = await Login_Metamask(control);

    if (account) {
      Set_Wallet_Text_To_Connect_Btn(Slice_Wallet(account));
      Hide_Connect_Btn();
      Show_Buy_MNP_Btn();
      Set_Data();
      return account;
    }
  }
  if (!Chek_Metamask()) {
    Tooltip_Connect_Btn_Show(control, "Istall metamask to connecting");
  }
}

function Hide_Connect_Btn() {
  $("#buy_form_connect_btn").css("display", "none");
}

function Hide_Buy_MNP_Btn() {
  $("#buy_mnp").css("display", "none");
}

function Show_Connect_Btn() {
  $("#buy_form_connect_btn").css("display", "inline");
}

function Show_Buy_MNP_Btn() {
  $("#buy_mnp").css("display", "inline");
}

function Round_BNB(number) {
  return Math.round(number * 1000000000000000) / 1000000000000000;
}

function Round_MNP(number) {
  return Math.round(number * 1000000000) / 1000000000;
}

function Calculate_MNP(number) {
  return Round_MNP(Round_BNB(number) * price);
}

function Chek_BNB_Value(numb) {
  if (numb == 0) {
    return false;
  }
  if (numb < 0) {
    return false;
  }
  if (numb > 0) {
    return true;
  }
  return false;
}

function Set_Buy_Description(val) {
  if (val < 0) {
    $(".buy_desc").text("Only Positive Numbers");
    $(".input_bnb").css("border", "1px solid red");
  }

  if (val == 0) {
    $(".buy_desc").text("Only More Than Zero");
    $(".input_bnb").css("border", "1px solid red");
  }

  if (val > 0) {
    $(".buy_desc").text("");
    $(".input_bnb").css("border", "1px solid black");
  }
}

async function Send_Transaction(account, summ, control) {
  try {
    let summ_string = Number(summ);

    if (isNaN(summ_string) || summ_string <= 0) {
      Tooltip_Connect_Btn_Show(control, "Enter a valid number");
      return;
    }
    let sum = "0x" + Number(1 * 10 ** 18 * summ).toString(16);

    let gas = "0x" + Number(80000).toString(16);

    let gas_price = "0x" + Number(5000000000).toString(16);

    const send_result = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          to: sale_contract_addres,
          from: account,          
          value: sum, // 2441406250
        },
      ],
    });
  } catch (e) {
    if (e["code"] === 4001) {
      Tooltip_Connect_Btn_Show(control, "Сonfirm the transaction in MetaMask");
    }
  }
}

function Chek_Step(step) {
  if (step == "1") {
    return "First";
  }
  if (step == "2") {
    return "Second";
  }
  if (step == "3") {
    return "Final";
  }
}

function Calc_Remaining_Tokens(data, sold_tokens) {
  let remaining = Number(data["final"]) - sold_tokens;
  return remaining;
}


function Hide_Sold_Data() {
  $("#right_buy_form_top").css("display", "none");
  $("#sale_addres").css("display", "none");
  $("#direct_container").css("display", "none");
  $("#sale_addres").css("display", "none");
  $("#rate_price_value").text("");
  $("#sale_step_supply").text("");
  $("#step_number,#sale_step_value").text("");
}

function Set_Sold_Tokens(sold_tokens) {
  $("#token_sold_value").text(sold_tokens);
}

function Show_Step_End_Message(step) {
  const mes = Chek_Step(step) + " Step Ended";
  $(".sale_step").text(mes);
  $(".buy_inform_container").css("display", "flex");
}

function Hide_Step_End_Message() {
  $(".sale_step").text("");
  $(".buy_inform_container").css("display", "none");
}

async function Set_Data() {
  let sold_tokens = await Get_Count_Saled_MNP();
  if (sold_tokens < final) {
    Hide_Step_End_Message();        
    Set_Sold_Tokens(sold_tokens);
  }
}



$(document).ready(function () {
  
  $("#amonut_bnb").on("input", function () {
    let value = $(this).val();

    if (value != "") {
      let num = Number($(this).val());
      if (Chek_BNB_Value(value)) {
        
        $(".bnb_symbol").css("visibility", "visible");
        $("#mnp_value").text(Calculate_MNP(value));
        Set_Buy_Description(value);
        return;
      };
      if (!Chek_BNB_Value(value)) {
        
        Set_Buy_Description(value);
        return;
      };
      
    }
    if (value.length === 0) {      
      $("#mnp_value").text(Calculate_MNP(0));
      $(".bnb_symbol").css("visibility", "hidden");
      $(".buy_desc").text("");
      $(".input_bnb").css("border", "1px solid black");
    };
  });

  $("#connect_button").on("click", function () {
    Run_Connect($(this));
  });

  $("#buy_form_connect_btn").on("click", function () {
    Run_Connect($(this));
  });

  $("#buy_mnp").on("click", async function () {
    let value = $("#amonut_bnb").val();
    if (!Chek_BNB_Value(value)) {
      Set_Buy_Description(value);
      return;
    }

    let account;
    if (Chek_Metamask()) {
      if (!(await window.ethereum._metamask.isUnlocked())) {
        Disconect();
        Tooltip_Connect_Btn_Show($(this), "Login to MetaMask");
        return;
      }

      account = await Login_Metamask($(this));

      const myRe = /^0x[0-9,a-f,A-F]{40}$/g;

      if (account.match(myRe)) {
        if (await Change_Chain($(this))) {
          Send_Transaction(account, value, $(this));
        }
      }
    }
    if (!Chek_Metamask()) {
      Tooltip_Connect_Btn_Show($(this), "Istall metamask to connecting");
    }
  });

  $("#amonut_bnb").on("blur", function () {
    let value = Number($(this).val());

    if (Chek_BNB_Value(value)) {
      $(this).val(Round_BNB(value));
      $(".bnb_symbol").css("visibility", "inherit");
      $("#mnp_value").text(Calculate_MNP(value));
    }
  });

  $(".direct_address").on("click", function () {
    const val = $(this).attr("title");
    Copy_To_Сlipboard(val);
  });

  $("#sale_addres").on("click", function () {
    Copy_To_Сlipboard($(this).text());
  });

  $("#token_address_value").on("click", function () {
    Copy_To_Сlipboard($(this).text());
  });

  $(window).resize(function () {
    let size = document.documentElement.clientWidth;  
      
    if (size < 768) {
      let tab = $(".selected").text();

      if (tab.includes("Metamask Buy")) {
        $(".buy_tab").click();
      }
      if (tab.includes("Token Information")) {
        $(".description_tab").click();
      }
    }
    if (size >= 768) {
      
      $(".buy_conteiner").css("display", "flex");
      $(".right_form").css("display", "block");
    }
  });

  $(".header_burger").on("click", function () {
    $(
      ".header_burger,.header_menu,.span_burger,.content_conteiner"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".buy_tab").on("click", function () {
    $(".buy_tab").addClass("selected");
    $(".description_tab").removeClass("selected");
    $(".buy_conteiner").css("display", "none");
    $(".right_form").css("display", "block");
    $(".right_form").addClass("show");
    $(".buy_conteiner").removeClass("show");
  });

  $(".description_tab").on("click", function () {
    $(".description_tab").addClass("selected");
    $(".buy_tab").removeClass("selected");
    $(".right_form").css("display", "none");
    $(".buy_conteiner").css("display", "flex");
    $(".buy_conteiner").addClass("show");
    $(".right_form").removeClass("show");
  });

  $(".nav_sotial,.sotial_container").on("mouseenter", function () {
    $(".content_conteiner").toggleClass("m_enter");
  });
  $(".nav_sotial,.sotial_container").on("mouseleave", function () {
    $(".content_conteiner").toggleClass("m_enter");
  });
});
