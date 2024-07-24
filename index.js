var main_windon_set = [];

var top_position;

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

function Vertical_Horizontal(width, heihgt) {
  return width > heihgt;
}

function Connect_Successfully(account) {
  Set_Wallet_Text_To_Connect_Btn(Slice_Wallet(account));
}

function Set_Wallet_Text_To_Connect_Btn(text) {
  $("#conn_text").text(text);
}

function Slice_Wallet(account) {
  let temp = account.slice(0, 7);
  temp = temp + "...." + account.slice(-6);
  return temp;
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

function Disconect() {
  $("#conn_text").text("Connect MetaMask");
}

function Chenge_Data(data){

  var count = data['count'];  
  var ret_arr = [];
  ret_arr['count'] = count;  

  for(let i = 0; i<count; i++ ){
    var temp_arr = {};
    temp_arr['wallet'] = data['wallets'][i];
    temp_arr['balance'] =  data['balances'][i];
    temp_arr['email'] =  data['emales'][i];
    temp_arr['name'] = data['names'][i];
    temp_arr['motto'] = data['mottos'][i];
    temp_arr['link'] = data['links'][i];
    temp_arr['color'] = data['colors'][i];
    temp_arr['flex'] = data['flexes'][i];
    temp_arr['logo'] = data['logos'][i];    
    ret_arr.push(temp_arr)
  };    
  return ret_arr;

};

function Load_MW_Answer(data) {    
    Hide_Main_Window_Load_Img();
    data = JSON.parse(data);         
    main_windon_set = Chenge_Data(data);    
    element_size = Get_Elements_Size();        
    Element_Install();
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

function Set_Class_Smal_To_Header() {
  const width = $(window).width();

  if (width < 768) {
    $(".header").addClass("smal");
  }
  if (width >= 768) {
    $(".header").removeClass("smal");
  }
}

function Sort_Elements() {
  let count = main_windon_set["count"];
  
  let ret_arr = [];

  let total_size = 0;

  for (let i = 0; i < count; i++) {
    const temp = Number(main_windon_set[i]["balance"]);
    main_windon_set[i]["balance"] = temp;
    ret_arr.push(main_windon_set[i]);
    total_size += temp;
  }

  ret_arr.sort(function (a, b) {
    if (a.balance > b.balance) {
      return -1;
    }
    if (a.balance < b.balance) {
      return 1;
    }

    return 0;
  });

  main_windon_set = ret_arr;

  main_windon_set["count"] = count;

  main_windon_set["total_size"] = total_size;
}



function Show_Main_Window_Load_Img(){
    $('.load').css('display', 'flex');
    
};

function Hide_Main_Window_Load_Img(){
    $('.load').css('display', 'none');
};

function Befor_Send(){
    Show_Main_Window_Load_Img()
};

function Load_Main_Window() {
    
  $.ajax({
    url: "TempLoadMW.php",
    type: "POST",
    beforeSen: Befor_Send(),
    success: Load_MW_Answer
  });
}

function Get_Elements_Size() {
 
  let count = main_windon_set['count'];      
  let ret_arr = [];

  let total_size = 0;
  
  for (let i = 0; i < count; i++) {
    let temp = Number(main_windon_set[i]["balance"]);

    ret_arr.push(temp);

    total_size += temp;
  }

  main_windon_set["total_size"] = total_size;

  return ret_arr;
}

function Calculate_Element_Volum(elements, width, height) {
  let total_volume = width * height;

  let elements_volums = [];

  let total_element_size = 0;

  elements.forEach((element) => {
    total_element_size += element;
  });

  let weight_of_one_point = total_volume / total_element_size;

  elements.forEach((element) => {
    elements_volums.push(element * weight_of_one_point);
  });
  return elements_volums;
}

function Calculete_Element_Sizes(elements_volume, width_in, height_in) {
  let counted_elements = 0;

  let remaining_width = width_in;

  let remaining_height = height_in;

  let ratio = 0;

  let elements_number = 1;

  let last_width = 0.0;

  let last_element_values = [];

  while (counted_elements < elements_volume.length) {
    let height_vs_width = Vertical_Horizontal(
      remaining_width,
      remaining_height
    );

    let counted_elements_sizes = [];

    let elements_values = [];

    let temp_ratio = 0.0;

    for (
      let i = counted_elements;
      i < elements_number + counted_elements;
      i++
    ) {
      let temp_temp = height_vs_width ? remaining_height : remaining_width;
      counted_elements_sizes.push(elements_volume[i] / temp_temp);
    }

    let total_width = 0.0;

    counted_elements_sizes.forEach((i) => {
      total_width += i;
    });

    let point_price =
      total_width / (height_vs_width ? remaining_height : remaining_width);

    counted_elements_sizes.forEach((i) => {
      elements_values.push(i / point_price);
    });

    elements_values.forEach((i) => {
      temp_ratio =
        temp_ratio < Math.max(i / total_width, total_width / i)
          ? Math.max(i / total_width, total_width / i)
          : temp_ratio;
    });

    if (ratio == 0 || ratio >= temp_ratio) {
      ratio = temp_ratio;
      elements_number += 1;
      last_width = total_width;
      last_element_values = elements_values.slice(0);
    }

    if (
      (ratio < temp_ratio && ratio != 0) ||
      elements_number + counted_elements + 1 > elements_volume.length
    ) {
      for (let i = 0; i < last_element_values.length; i++) {
        height_vs_width
          ? elements_height.push(last_element_values[i])
          : elements_width.push(last_element_values[i]);

        height_vs_width
          ? elements_width.push(last_width)
          : elements_height.push(last_width);

        element_direction.push(height_vs_width);
      }

      if (height_vs_width) {
        remaining_width -= last_width;
      }

      if (!height_vs_width) {
        remaining_height -= last_width;
      }

      counted_elements += last_element_values.length;

      ratio = 0;
      elements_number = 1;
      last_width = 0.0;
      last_element_values = [];
    }
  }
}

function Elements_Coordinate(el_wid, el_hei, el_direc, wid, hei) {
  let x = top_position;

  let y = 0.0;

  let temp_x = top_position;

  let temp_y = 0.0;

  

  for (let i = 0; i < el_wid.length; i++) {
    
    if (el_direc[i]) {      
      begin_pozishion.push([x, temp_y]);
      temp_y += el_hei[i];
      if (temp_y >= hei|| hei - temp_y < 0.0001) {
        x = el_wid[i] + temp_x;
        temp_y = y;
        temp_x = x;
      }
    }
    
    

    if (!el_direc[i]) {      
      begin_pozishion.push([temp_x, y]);
      temp_x += el_wid[i];
      
      if (temp_x >= wid + 50) {       
        y = el_hei[i] + temp_y;
        temp_x = x;
        temp_y = y;
      }
    }
  }
}

function Create_Main_Tooltip(num) {
  let ret_str = "";

  const wallet = main_windon_set[num]["wallet"];

  const balance = Number(main_windon_set[num]["balance"]);

  const balance_in_percent = Percent_Of_Sizes(balance);

  const total_percent = Percent_Of_Total_Size(balance);

  const email = main_windon_set[num]["email"];

  const name = main_windon_set[num]["name"];

  const motto = main_windon_set[num]["motto"];

  const link = main_windon_set[num]["link"];

  ret_str += "Wallet: " + wallet + "\n";

  ret_str +=
    "Balance: " +
    balance +
    " MNP (" +
    balance_in_percent +
    "%) (" +
    total_percent +
    "%)\n";

  if (email != "") {
    ret_str += "Email: " + email + "\n";
  }

  if (name != "") {
    ret_str += "Name: " + name + "\n";
  }

  if (motto != "") {
    ret_str += "Motto: " + motto + "\n";
  }

  if (link != "" && link.length <= 512) {
    ret_str += "Link: " + link + "\n";
  }

  return ret_str;
}

function Set_Link(num) {
  let ret_str = "";

  if (main_windon_set[num]["link"] != "") {
    ret_str = Link_Correction(main_windon_set[num]["link"]);

    $(
      '<a class="mw_link" href="' + ret_str + '" target="_blank"></a>'
    ).appendTo("#" + main_windon_set[num]["wallet"]);

    if (ret_str.length > 50) {
      ret_str = ret_str.slice(0, 47) + "...";
    }

    ret_str = "Link: " + ret_str;
  }

  return ret_str;
}

function Set_Tooltip(target, str) {
  target.attr("title", str);
}

let element_size = [];
// Высота каждого элемента
let elements_height = [];
// Ширина каждого элемента
let elements_width = [];
// Направление элементов
let element_direction = [];
// Начальная позиция
let begin_pozishion = [];

function Element_Install() {
  let width = document.documentElement.clientHeight - top_position;

  let height = document.documentElement.clientWidth;

  

  let elements_volum = Calculate_Element_Volum(element_size, width, height);

  elements_height = [];

  elements_width = [];

  element_direction = [];

  begin_pozishion = [];

  Calculete_Element_Sizes(elements_volum, width, height);

  Elements_Coordinate(
    elements_width,
    elements_height,
    element_direction,
    width,
    height
  );

  for (let i = 0; i < begin_pozishion.length; i++) {
    let wallet = main_windon_set[i]["wallet"];

    let block = $(
      '<div class="content_blocker" id =' +
        wallet +
        ' style="top: ' +
        begin_pozishion[i][0] +
        "px; left: " +
        begin_pozishion[i][1] +
        "px; width: " +
        elements_height[i] +
        "px; height:" +
        elements_width[i] +
        'px;"/>'
    );

    block.appendTo(".content_container");

    let logo = main_windon_set[i]["logo"];

    let img;

    img = $('<img class="img_visibility_main" alt="No Img"/>');

    const result = Set_Img_To_Display(img, logo);

    if (result) {
      Set_Bckg_Col_Settings(block, main_windon_set[i]["color"]);
    }
    if (!result) {
      Set_Bckg_Col_Settings(block, "#384649");
    }

    img.appendTo(block);

    let tooltip_str = Create_Main_Tooltip(i);

    Set_Pic_Flex(img, main_windon_set[i]["flex"]);

    Set_Link(i);

    Set_Tooltip(block, tooltip_str);
  }
}

function Remove_All_Blocks() {
  $(".content_blocker").remove();
}

function Percent_Of_Sizes(balance) {
  return balance / (main_windon_set["total_size"] / 100);
}

function Percent_Of_Total_Size(balance) {
  return balance / (total_suply / 100);
}

function Chek_Picture_Link_Plus_Length_Http(val) {
  if (val.length > 512) {
    return false;
  }
  if (!Chek_Http(val) || val.length == 0) {
    return false;
  }
  if (!Chek_Picture_Link(val) || val.length == 0) {
    return false;
  }
  if (Chek_Picture_Link(val) && val.length <= 512) {
    return true;
  }
}

function Chek_Http(val) {
  const myreg = /^https?:\/\//;
  return myreg.test(val);
}

function Chek_Picture_Link(val) {
  const myreg = /^https?:\/\/\S+.\S+(?:jpg|jpeg|png|svg|webp|gif)$/;
  return myreg.test(val);
}

function Set_Img_To_Display(target, url) {
  const chek_logo = Chek_Picture_Link_Plus_Length_Http(url);

  if (!chek_logo || url == "No IMG" || url == "") {
    target.attr("src", "src/image/NO_IMG.png");
    return false;
  }
  if (chek_logo && url != "No IMG" && url != "") {
    target.attr("src", url);
    return true;
  }
}

function Set_Pic_Flex(target, val) {
  if (val == "on") {
    target.css("object-fit", "fill");
  }
  if (val == "off") {
    target.css("object-fit", "contain");
  }
}

function Set_Bckg_Col_Settings(target, color_hex) {
  target.css("background-color", color_hex);
}

function Get_RandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Calc_Top_Position(){
  const width = $(window).width();

  if (width < 768) {
    top_position = 91;
  };
  if (width >= 768) {
    top_position = 151;
  };
};

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}


$(document).ready(function () { 
  
  

  Calc_Top_Position();
  
  Load_Main_Window();

  Set_Class_Smal_To_Header();  

  $(window).resize(function () {        

    Calc_Top_Position();

    Remove_All_Blocks();

    Element_Install();
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

  $("#connect_button").on("click", async function () {
    await Run_Connect($(this));
  });  
});

function Link_Correction(val) {
  let res = val.indexOf("://");

  let temp = val;

  if (res == -1) {
    temp = "http://" + val;
  }
  if (res >= 0) {
    temp = "http://" + val.slice(res + 3);
  }

  return temp;
}
