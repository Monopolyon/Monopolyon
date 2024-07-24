const  total_suply = 210000000;

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

var chain_id_number = 56;

var chain_id_hex = '0x38';

var price = 0;

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

function Chek_Email(val) {
  let myreg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return myreg.test(val);
}

function Chek_Picture_Link(val) {
  const myreg = /^https?:\/\/\S+.\S+(?:jpg|jpeg|png|svg|webp|gif)$/;
  return myreg.test(val);
}

function Chek_Link(val) {
  const myreg =
    /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
  return myreg.test(val);
}

function Chek_Http(val) {
  const myreg = /^https?:\/\//;
  return myreg.test(val);
}

function Copy_To_Сlipboard(target) {
  const temp_str = target.trim();
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(temp_str).select();
  document.execCommand("copy");
  $temp.remove();
}

function Set_Connect_Status(status) {
  if (status === true) {
    $(".connect_status").css("background-color", "#32a852");
  }
  if (status === false) {
    $(".connect_status").css("background-color", "#fc6060");
  }
}

function Disconect() {
  
  $("#conn_text").text("Connect MetaMask");
  Set_Wallet_To_Left_Header("Wallet disconected");
  Hide_Copy_Icon();
  Set_Connect_Status(false);
  Anset_MNP_Balance();
  $(".inp_value").addClass("disable");
  Show_Connect_Btn_Set();
  Hide_Save_Settings_Btn();
  Hide_Confirm_Message();
  Show_Table();
}

function Connect_Successfully(account) {
  Set_Wallet_Text_To_Connect_Btn(Slice_Wallet(account));
  Set_Wallet_To_Left_Header(Slice_Wallet(account));
  Show_Copy_Icon();
  Set_Wallet_Title(account);
  Set_Connect_Status(true);
  $(".inp_value").removeClass("disable");
  Hide_Connect_Btn_Set();
  Show_Save_Settings_Btn();
}

function Hide_Connect_Btn_Set() {
  $("#save_data_connect_btn").css("display", "none");
}

function Show_Connect_Btn_Set() {
  $("#save_data_connect_btn").css("display", "block");
}

function Hide_Save_Settings_Btn() {
  $("#save_data").css("display", "none");
}

function Show_Save_Settings_Btn() {
  $("#save_data").css("display", "block");
}

function Chek_Color(color) {
  const reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g;

  return reg.test(color);
}

function Set_Flex_Pictures_Value_And_Text(flex) {
  if (flex === "on") {
    $("#flex_picture").prop("checked", true);
    $(".flex_logo_on_off").text("ON");
    $(".cont_img").css("object-fit", "fill");
  }

  if (flex === "off") {
    $("#flex_picture").prop("checked", false);
    $(".flex_logo_on_off").text("OFF");
    $(".cont_img").css("object-fit", "contain");
  }
}

function Set_User_Data(data) {
  $("#email_value").val(data["email"]);
  $("#name_value").val(data["name"]);
  $("#motto_value").val(data["motto"]);
  $("#link_value").val(data["link"]);
  $("#logo_value").val(data["logo"]);

  Set_Flex_Pictures_Value_And_Text(data["flex"]);

  const color = data["color"];

  Set_Back_Color_Value(color);

  Set_Back_Color_Logo(color);
}

async function Get_User_Data(account) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const contract = new ethers.Contract(
    saver_contract_address,
    saver_contract_ABI,
    provider
  );

  return await contract.getData(account);
}

async function Get_MNP_Balance(account) {

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  

  const Contract = new ethers.Contract(
    MNP_contract_address,
    MNP_contract_ABI,
    provider
  );
  

  const balance = await Contract.balanceOf(account);
  const clear_balance = parseInt(balance) / 1000000000;
  
  Set_MNP_Balance(clear_balance);
}

function Set_MNP_Balance(text) {
  
  $(".balance_value").text(text);
}
function Anset_MNP_Balance() {
  
  $(".balance_value").text("");
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

function Show_Confirm_Message() {
  $(".message_container").css("display", "flex");
}

function Hide_Confirm_Message() {
  $(".message_container").css("display", "none");
}

function Show_Table() {
  $(".comporision_table_conteiner").css("display", "block");
}

function Hide_Table() {
  $(".comporision_table_conteiner").css("display", "none");
}

function Change_Table_To_Message_And_Close() {
  Hide_Table();
  Show_Confirm_Message();
  setTimeout(Close_Cange_Overflow, 2000);
}

async function Save(account) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const Contract = new ethers.Contract(
    saver_contract_address,
    saver_contract_ABI,
    provider
  );

  const signer = provider.getSigner();

  const daiWithSigner = Contract.connect(signer);

  const user_data = Get_Data_From_Inputs();

  Change_Table_To_Message_And_Close();

  const tx = await daiWithSigner.saveData([
    user_data["email"],
    user_data["name"],
    user_data["motto"],
    user_data["link"],
    user_data["logo"],
    user_data["flex"],
    user_data["color"],
  ]);
}

async function Save_User_Data(control) {
  if (Chek_Metamask()) {
    if (!(await window.ethereum._metamask.isUnlocked())) {
      Disconect();
    }

    const account = await Login_Metamask(control);
    try {
      if (account) {
        const result = await Save(account);

        return account;
      }
    } catch (e) {
      if (e.message.includes("Unrecognized chain ID")) {
        Tooltip_Connect_Btn_Show(control, "Add BNB Chain network first");
      }
      if (e.message.includes("wallet_switchEthereumChain")) {
        Tooltip_Connect_Btn_Show(
          control,
          "Switch To BNB Chain network in MetaMask first"
        );
      }
      if (e.message == "User rejected the request.") {
        Tooltip_Connect_Btn_Show(
          control,
          "Switch To BNB Chain network in MetaMask first"
        );
      }
    }
  }
  if (!Chek_Metamask()) {
    Tooltip_Connect_Btn_Show(control, "Istall metamask to connecting");
  }
}

async function Connect_Save_User_Data(control) {
  if (Chek_Metamask()) {
    if (!(await window.ethereum._metamask.isUnlocked())) {
      Disconect();
    }

    const account = await Login_Metamask(control);
    try {
      if (account) {
        await Change_Chain(control);
        return account;
      }
    } catch (e) {
      if (e.message.includes("Unrecognized chain ID")) {
        Tooltip_Connect_Btn_Show(control, "Add BNB Chain network first");
      }
      if (e.message.includes("wallet_switchEthereumChain")) {
        Tooltip_Connect_Btn_Show(
          control,
          "Switch To BNB Chain network in MetaMask first"
        );
      }
      if (e.message == "User rejected the request.") {
        Tooltip_Connect_Btn_Show(
          control,
          "Switch To BNB Chain network in MetaMask first"
        );
      }
    }
  }
  if (!Chek_Metamask()) {
    Tooltip_Connect_Btn_Show(control, "Istall metamask to connecting");
  }
}

async function Run_Connect(control) {
  let account;
  if (Chek_Metamask()) {
    if (!(await window.ethereum._metamask.isUnlocked())) {
      Disconect();
    }

    account = await Login_Metamask(control);
    try {
      if (account) {
        await Change_Chain(control);
        Connect_Successfully(account);
        await Get_MNP_Balance(account);
        const data = await Get_User_Data(account);
        Get_Settings_History(account);
        Set_User_Data(data);
        return account;
      }
    } catch (e) {
      if (e.message.includes("Unrecognized chain ID")) {
        Tooltip_Connect_Btn_Show(control, "Add BNB Chain network first");
      }
      if (e.message.includes("wallet_switchEthereumChain")) {
        Tooltip_Connect_Btn_Show(
          control,
          "Switch To BNB Chain network in MetaMask first"
        );
      }
      if (e.message == "User rejected the request.") {
        Tooltip_Connect_Btn_Show(
          control,
          "Switch To BNB Chain network in MetaMask first"
        );
      }
    }
  }
  if (!Chek_Metamask()) {
    Tooltip_Connect_Btn_Show(control, "Istall metamask to connecting");
  }
}

function Get_Settings_History(account) {}

function Set_Wallet_Text_To_Connect_Btn(text) {
  $("#conn_text").text(text);
}

function Show_Copy_Icon() {
  $(".copy_icon_container").css("display", "inline-block");
}

function Hide_Copy_Icon() {
  $(".copy_icon_container").css("display", "none");
}

function Set_Wallet_To_Left_Header(text) {
  $(".wallet_address").text(text);
}

function Set_Wallet_Title(text) {
  $(".wallet_address").attr("title", text);
}

function Tooltip_Connect_Btn_Show(control, text) {
  let children = control.find(".connect_btn_tool");
  children.text(text);
  children.css("visibility", "visible");
  setTimeout(() => {
    children.css("visibility", "hidden");
  }, 2000);
}

function Tooltip_Input_Show(control, text) {
  let clo = control.closest("div");
  let children = clo.find(".inp_tool");
  children.text(text);
  children.css("visibility", "visible");
  setTimeout(() => {
    children.css("visibility", "hidden");
  }, 2000);
}

function Slice_Wallet(account) {
  let temp = account.slice(0, 7);
  temp = temp + "...." + account.slice(-6);
  return temp;
}

function Show_Content(target) {
  if (target === "dt_nav") {
    $(".inp_conteiner").css("display", "block");
    $(".display_conteiner").css("display", "none");
    $(".history_conteiner").css("display", "none");
    $(".dt_des_conteiner").css("display", "block");
    $(".disp_des_container").css("display", "none");
    $(".hist_desc_container").css("display", "none");
  }
  if (target === "disp_nav") {
    $(".inp_conteiner").css("display", "none");
    $(".display_conteiner").css("display", "block");
    $(".history_conteiner").css("display", "none");
    $(".dt_des_conteiner").css("display", "none");
    $(".disp_des_container").css("display", "block");
    $(".hist_desc_container").css("display", "none");
  }
  if (target === "hist_nav") {
    $(".inp_conteiner").css("display", "none");
    $(".display_conteiner").css("display", "none");
    $(".history_conteiner").css("display", "block");
    $(".dt_des_conteiner").css("display", "none");
    $(".disp_des_container").css("display", "none");
    $(".hist_desc_container").css("display", "block");
  }
}

function Unset_Text(target) {
  target.text("");
}

function Set_Error_Text(text, target) {
  target.text(text);
  target.css("color", "red");
}

function Clear_All_Notification() {
  Unset_Text($("#email_notification"));
  Unset_Text($("#name_notification"));
  Unset_Text($("#motto_notification"));
  Unset_Text($("#link_notification"));
  Unset_Text($("#url_notification"));
}

function Chek_Email_Plus_Length(val) {
  if (val.length > 100) {
    Set_Error_Text("Email To Long", $("#email_notification"));
    return false;
  }
  if (!Chek_Email(val) && val.length != 0) {
    Set_Error_Text("Incorrect Email", $("#email_notification"));
    return false;
  }
  if (Chek_Email(val) || val.length <= 100) {
    Unset_Text($("#email_notification"));
    return true;
  }
}

function Chek_Picture_Link_Plus_Length_Http_Set(val) {
  if (val.length > 512) {
    Set_Error_Text("URL To Long", $("#url_notification"));
    return false;
  }
  if (!Chek_Http(val) && val.length != 0) {
    Set_Error_Text(
      "URL Must start with http:// or https://",
      $("#url_notification")
    );
    return false;
  }
  if (!Chek_Picture_Link(val) && val.length != 0) {
    Set_Error_Text("Incorrect URL", $("#url_notification"));
    return false;
  }
  if (Chek_Picture_Link(val) || val.length <= 512) {
    Unset_Text($("#url_notification"));
    return true;
  }
}

function Chek_Link_Plus_Length_Http(val) {
  if (val.length > 512) {
    Set_Error_Text("Link To Long", $("#link_notification"));
    return false;
  }
  if (!Chek_Http(val) && val.length != 0) {
    Set_Error_Text(
      "link Must start with http:// or https://",
      $("#link_notification")
    );
    return false;
  }
  if (!Chek_Link(val) && val.length != 0) {
    Set_Error_Text("Incorrect URL", $("#link_notification"));
    return false;
  }
  if (Chek_Link(val) || val.length <= 512) {
    Unset_Text($("#link_notification"));
    return true;
  }
}

function Chek_All_Settings() {
  let flag = true;

  const email = $("#email_value").val();
  if (email.length === 0) {
    Unset_Text($("#email_notification"));
  }
  const logo = $("#logo_value").val();
  if (logo.length === 0) {
    Unset_Text($("#url_notification"));
  }
  const link = $("#link_value").val();
  if (link.length === 0) {
    Unset_Text($("#link_notification"));
  }
  const name = $("#name_value").val();
  if (name.length === 0 || name.length <= 30) {
    Unset_Text($("#name_notification"));
  }
  if (name.length > 30) {
    Set_Error_Text("Name To Long", $("#name_notification"));
    flag = false;
  }

  const motto = $("#motto_value").val();
  if (motto.length === 0 || motto.length <= 80) {
    Unset_Text($("#motto_notification"));
  }
  if (motto.length > 80) {
    Set_Error_Text("Motto To Long", $("#motto_notification"));
    flag = false;
  }

  if (!Chek_Link_Plus_Length_Http(link)) {
    flag = false;
  }
  if (!Chek_Email_Plus_Length(email)) {
    flag = false;
  }
  if (!Chek_Picture_Link_Plus_Length_Http_Set(logo)) {
    flag = false;
  }
  return flag;
}

function Set_Different_Value_Color(old_target, new_target) {
  old_target.css("color", "red");
  new_target.css("color", "green");
}

function Get_Data_From_Inputs() {
  const flex = $("#flex_picture").prop("checked") ? "on" : "off";

  return {
    email: $("#email_value").val(),
    name: $("#name_value").val(),
    motto: $("#motto_value").val(),
    link: $("#link_value").val(),
    color: $("#back_color").val(),
    flex: flex,
    logo: $("#logo_value").val(),
  };
}

function Set_Comparision_Value(data) {
  const new_data = Get_Data_From_Inputs();

  $(".old_email").text(data["email"]);
  $(".new_email").text(new_data["email"]);

  $(".old_name").text(data["name"]);
  $(".new_name").text(new_data["name"]);

  $(".old_motto").html(data["motto"]);
  $(".new_motto").html(new_data["motto"]);

  $(".old_link").text(data["link"]);
  $(".new_link").text(new_data["link"]);

  $(".old_logo_url").text(data["logo"]);
  $(".new_logo_url").text(new_data["logo"]);

  $(".old_color").text(data["color"]);
  $(".new_color").text(new_data["color"]);

  $(".old_flex").text(data["flex"]);
  $(".new_flex").text(new_data["flex"]);
}

function Clean_Chenge_Overflow_Colors() {
  $(".old_email").css("color", "black");
  $(".new_email").css("color", "black");

  $(".old_name").css("color", "black");
  $(".new_name").css("color", "black");

  $(".old_motto").css("color", "black");
  $(".new_motto").css("color", "black");

  $(".old_link").css("color", "black");
  $(".new_link").css("color", "black");

  $(".old_logo_url").css("color", "black");
  $(".new_logo_url").css("color", "black");

  $(".old_color").css("color", "black");
  $(".new_color").css("color", "black");

  $(".old_flex").css("color", "black");
  $(".new_flex").css("color", "black");
}

function Clean_Chenge_Overflow() {
  $(".old_email").text("");
  $(".new_email").text("");

  $(".old_name").text("");
  $(".new_name").text("");

  $(".old_motto").text("");
  $(".new_motto").text("");

  $(".old_link").text("");
  $(".new_link").text("");

  $(".old_logo_url").text("");
  $(".new_logo_url").text("");

  $(".old_color").text("");
  $(".new_color").text("");

  $(".old_flex").text("");
  $(".new_flex").text("");
}

async function Data_Comparition(account) {
  Open_Change_Overflow();

  let change = false;

  const old_data = await Get_User_Data(account);

  const new_data = Get_Data_From_Inputs();

  if (new_data["email"] != old_data["email"]) {
    Set_Different_Value_Color($(".old_email"), $(".new_email"));
    change = true;
  }
  if (new_data["name"] != old_data["name"]) {
    Set_Different_Value_Color($(".old_name"), $(".new_name"));
    change = true;
  }
  if (new_data["motto"] != old_data["motto"]) {
    Set_Different_Value_Color($(".old_motto"), $(".new_motto"));
    change = true;
  }
  if (new_data["link"] != old_data["link"]) {
    Set_Different_Value_Color($(".old_link"), $(".new_link"));
    change = true;
  }
  if (new_data["color"] != old_data["color"]) {
    Set_Different_Value_Color($(".old_color"), $(".new_color"));
    change = true;
  }
  if (new_data["flex"] != old_data["flex"]) {
    Set_Different_Value_Color($(".old_flex"), $(".new_flex"));
    change = true;
  }
  if (new_data["logo"] != old_data["logo"]) {
    Set_Different_Value_Color($(".old_logo_url"), $(".new_logo_url"));
    change = true;
  }

  Set_Comparision_Value(old_data);
}

function Final_Comparition() {
  let change = false;

  if ($(".old_email").text() != $(".new_email").text()) {
    change = true;
  }

  if ($(".old_name").text() != $(".new_name").text()) {
    change = true;
  }

  if ($(".old_motto").text() != $(".new_motto").text()) {
    change = true;
  }

  if ($(".old_link").text() != $(".new_link").text()) {
    change = true;
  }

  if ($(".old_logo_url").text() != $(".new_logo_url").text()) {
    change = true;
  }

  if ($(".old_color").text() != $(".new_color").text()) {
    change = true;
  }

  if ($(".old_flex").text() != $(".new_flex").text()) {
    change = true;
  }

  return change;
}

function Open_Change_Overflow() {
  $(".overflow_conteiner").css("visibility", "inherit");
  $(".overflow_conteiner").css("opacity", "1");
  $(".overflow_conteiner").css("z-index", 2);
  $("body").addClass("lock");
}

function Close_Cange_Overflow() {
  $(".overflow_conteiner").css("visibility", "hidden");
  $(".overflow_conteiner").css("opacity", "0");
  $(".overflow_conteiner").css("z-index", "-1");
  $("body").removeClass("lock");
  Clean_Chenge_Overflow();
  Clean_Chenge_Overflow_Colors();
  Hide_Confirm_Message();
  Show_Table();
}

function Set_Back_Color_Logo(color) {
  if (Chek_Color(color)) {
    $(".square_cont,.rect_vert_cont,.rect_hor_cont").css(
      "background-color",
      color
    );
  }
  if (!Chek_Color(color)) {
    $(".square_cont,.rect_vert_cont,.rect_hor_cont").css(
      "background-color",
      "#000000"
    );
  }
}

function Set_Back_Color_Value(color) {
  if (Chek_Color(color)) {
    $("#back_color").val(color);
  }
  if (!Chek_Color(color)) {
    $("#back_color").val("#000000");
  }
}

function Create_Settings_Tooltip() {
  const data = Get_Data_From_Inputs();
  const wallet = $(".wallet_address").attr("title");
  const balance = $(".balance_value").text();
  const total_percent = Percent_Of_Total_Size(Number(balance));
  let tooltip = "";

  Query_To_Chek_Picture_Link(data["logo"]);

  Set_Link_To_Img($(".img_ln"), data["link"]);

  tooltip += "Wallet: " + wallet + "\n";

  tooltip +=
    "Balance: " +
    balance +
    " MNP (persent of area in main window%) (" +
    total_percent +
    "%)\n";

  if (Chek_Email_Plus_Length(data["email"]) && data["email"] != 0) {
    tooltip += "Email: " + data["email"] + "\n";
  }

  if (data["name"].length != 0 && data["name"].length <= 30) {
    tooltip += "Name: " + data["name"] + "\n";
  }

  if (data["motto"].length != 0 && data["motto"].length <= 80) {
    tooltip += "Motto: " + data["motto"] + "\n";
  }

  if (Chek_Link_Plus_Length_Http(data["link"]) && data["link"] != 0) {
    tooltip += "Link: " + data["link"] + "\n";
  }

  return tooltip;
}

function Percent_Of_Sizes(balance) {
  return balance / (main_windon_set["total_size"] / 100);
}

function Percent_Of_Total_Size(balance) {
  return balance / (total_suply / 100);
}

function Set_Title_To_Img() {
  $(".img_ln").attr("title", Create_Settings_Tooltip());
}

function Set_Link_To_Img(target, url) {
  target.attr("href", url);
}

function Url_To_Send(url) {
  return;
}

function Query_To_Chek_Picture_Link(url) {
  $.ajax({
    url: "Chek_Query.php",
    type: "POST",
    beforeSend: Show_Loading_Image(),
    data: { link: url },
    success: Chek_Picture_Link_Answer,
  });
}

function Show_Loading_Image() {}

function Hide_Loading_Image() {}

function Chek_Picture_Link_Answer(data) {
  Hide_Loading_Image();
  data = JSON.parse(data);
  if (data["result"] == "No IMG") {
    $(".cont_img").attr("src", "src/image/NO_IMG.png");
  }
  if (data["result"] != "No IMG") {
    $(".cont_img").attr("src", data["result"]);
  }
}

$(document).ready(function () {
  $("#email_value").on("input", function () {
    const value = $(this).val();
    if (value.length === 0) {
      Unset_Text($("#email_notification"));
      return;
    }
    Chek_Email_Plus_Length(value);
  });

  $("#logo_value").on("input", function () {
    const value = $(this).val();
    if (value.length === 0) {
      Unset_Text($("#url_notification"));
      return;
    }
    Chek_Picture_Link_Plus_Length_Http_Set(value);
  });

  $("#logo_value").on("blur", function () {
    const value = $(this).val();
    if (value.length === 0) {
      Unset_Text($("#url_notification"));
      return;
    }
    if (Chek_Picture_Link_Plus_Length_Http_Set(value)) {
      Query_To_Chek_Picture_Link(value);
    }
  });

  $("#link_value").on("input", function () {
    const value = $(this).val();
    if (value.length === 0) {
      Unset_Text($("#link_notification"));
      return;
    }
    Chek_Link_Plus_Length_Http(value);
  });

  $("#name_value").on("input", function () {
    const value = $(this).val();

    if (value.length === 0 || value.length <= 30) {
      Unset_Text($("#name_notification"));
    }
    if (value.length > 30) {
      Set_Error_Text("Name To Long", $("#name_notification"));
    }
  });

  $("#motto_value").on("input", function () {
    const value = $(this).val();

    if (value.length === 0 || value.length <= 80) {
      Unset_Text($("#motto_notification"));
    }
    if (value.length > 80) {
      Set_Error_Text("Motto To Long", $("#motto_notification"));
    }
  });

  $(".header_burger").on("click", function () {
    $(
      ".header_burger,.header_menu,.span_burger,.content_conteiner"
    ).toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".nav_sotial,.sotial_container").on("mouseenter", function () {
    $(".content_conteiner").toggleClass("m_enter");
  });

  $(".nav_sotial,.sotial_container").on("mouseleave", function () {
    $(".content_conteiner").toggleClass("m_enter");
  });

  $("#dt_nav, #disp_nav, #hist_nav").on("click", function () {
    $(".selector").addClass("disable");
    $(".selector").removeClass("enable");
    $(this).removeClass("disable");
    $(this).addClass("enable");
    Show_Content($(this).attr("id"));
  });

  $("#connect_button,#save_data_connect_btn").on("click", async function () {
    await Run_Connect($(this));
    Set_Title_To_Img();
  });

  $(".inp_value").on("click", function () {
    if ($(".inp_value").hasClass("disable")) {
      Clear_All_Notification();
      $(this).val("");
      $(this).trigger("blur");
      Tooltip_Input_Show($(this), "Connect MetaMask First");
    }
  });

  $(".inp_value").on("blur", function () {
    if (!$(".inp_value").hasClass("disable")) {
      if ($(this).val().length > 0) {
        Set_Title_To_Img();
      }
    }
  });

  $("#save_data").on("click", async function () {
    if (!Chek_All_Settings()) {
      return;
    }
    const account = await Connect_Save_User_Data($(this));
    if (!account) {
      return;
    }
    await Data_Comparition(account);
  });

  $("#save_data_to_blockchain").on("click", async function () {
    if (!Chek_All_Settings()) {
      return;
    }

    const account = await Connect_Save_User_Data($(this));
    if (!account) {
      return;
    }

    const change_result = Final_Comparition();

    if (change_result === false) {
      Tooltip_Connect_Btn_Show(
        $(this),
        "You haven't made any changes. Saving has no meaning"
      );
      return;
    }

    await Save_User_Data(account);
    Set_Title_To_Img();
  });

  $(
    "#cancel_data_to_blockchain, .data_change_overflow, .cloce_comparition_table"
  ).on("click", function () {
    Close_Cange_Overflow();
  });

  $(".copy_icon_container").on("click", function () {
    const target = $(".wallet_address").attr("title");

    Copy_To_Сlipboard(target);
  });

  $("#flex_picture").on("change", function () {
    $(this).prop("checked")
      ? $(".flex_logo_on_off").text("ON")
      : $(".flex_logo_on_off").text("OFF");
    $(this).prop("checked")
      ? $(".cont_img").css("object-fit", "fill")
      : $(".cont_img").css("object-fit", "contain");
  });

  $("#back_color").on("change", function () {
    Set_Back_Color_Logo($(this).val());
  });

  $("#sc_copy").on("click", function () {
    const val = $(".SC_value").attr("title");
    Copy_To_Сlipboard(val);
  });
});
