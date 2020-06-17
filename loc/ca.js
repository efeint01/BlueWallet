module.exports = {
  _: {
    storage_is_encrypted: "L'informació està xifrada. Es requereix la contrasenya per a desxifrar-la.",
    enter_password: 'Introduïu la contrasenya',
    bad_password: 'Contrasenya incorrecta. Torna-ho a provar.',
    never: 'mai',
    continue: 'Continuar',
    ok: 'OK',
  },
  wallets: {
    options: 'opcions',
    select_wallet: 'Seleccioni moneder',
    createBitcoinWallet:
      'Per poder utilitzar un moneder Lightning és necessari un moneder Bitcoin per finançar la primera operació. Vols continuar?',
    list: {
      app_name: 'BlueWallet',
      title: 'moneders',
      header: 'Un moneder està representat per un secret (clau privada) i una direcció que pots compartir per rebre utxo (monedes*).',
      add: 'Afegir moneder',
      create_a_wallet: 'Afegeix un moneder',
      create_a_wallet1: 'És gratuït i pots crear',
      create_a_wallet2: 'tants com vulguis',
      create_a_button: 'Afegir ara',
      latest_transaction: 'última transacció',
      empty_txs1: 'Les seves transaccions apareixeran aquí,',
      empty_txs2: 'encara no té cap transacció.',
      empty_txs1_lightning:
        'Els moneders Lightning poden ser usats per les seves transaccions diàries. Les comissions són baixes i els pagaments ràpids.',
      empty_txs2_lightning: '',
      tap_here_to_buy: 'Prem aquí per comprar Bitcoin',
    },
    reorder: {
      title: 'Reorganitzar moneder',
    },
    add: {
      title: 'Afegir moneder',
      description:
        'Pots escanejar moneders de paper (en format WIF) o crear un nou moneder. Els moneders SegWit són compatibles per defecte.',
      scan: 'Escanejar',
      create: 'Crear',
      label_new_segwit: 'Nou SegWit',
      label_new_lightning: 'Nou Lightning',
      wallet_name: 'nom del moneder',
      wallet_type: 'tipus de moneder',
      or: 'o',
      import_wallet: 'Importar moneder',
      imported: 'Importat',
      coming_soon: 'Pròximament',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
      entropy_provide: 'Provide entropy via dice rolls',
      entropy_generated: 'bytes of generated entropy',
    },
    details: {
      title: 'Detalls del moneder',
      address: 'Direcció',
      master_fingerprint: 'Petjada digital mestre',
      type: 'Tipus',
      label: 'Etiqueta',
      delete: 'Eliminar',
      save: 'Guardar',
      destination: 'destí',
      description: 'descripció',
      are_you_sure: '¿Estàs segur?',
      yes_delete: 'Si, eliminar',
      no_cancel: 'No, cancel·lar',
      delete_this_wallet: 'Eliminar aquest moneder',
      export_backup: 'Exportar / Guardar',
      buy_bitcoin: 'Comprar Bitcoin',
      show_xpub: 'Mostrar wallet XPUB',
      connected_to: 'Connectat a',
      advanced: 'Avançat',
      use_with_hardware_wallet: 'Usar amb un moneder hardware',
    },
    export: {
      title: 'Exportació de moneder',
    },
    xpub: {
      title: 'wallet XPUB',
      copiedToClipboard: 'Copiat al porta-retalls.',
    },
    import: {
      title: 'importar',
      explanation:
        'Escrigui aquí el mnemotècnic, clau privada, WIF, o quelcom que tingui. BlueWallet fara tot el posible per encertar el formato correcte e importar el moneder.',
      imported: 'Importat',
      error: "No s'ha pogut importar. ¿És vàlid?",
      success: 'Èxit',
      do_import: 'Importar',
      scan_qr: 'o escanejar codi QR?',
    },
    scanQrWif: {
      go_back: 'Tornar enrere',
      cancel: 'Cancel·lar',
      decoding: 'Descodificació',
      input_password: 'Ingressi la seva contrasenya',
      password_explain: 'Això és una BIP38 clau privada encriptada',
      bad_password: 'Contrasenya invalida',
      wallet_already_exists: 'El moneder ja existeix',
      bad_wif: 'WIF incorrecte',
      imported_wif: 'WIF importat ',
      with_address: ' amb adreça ',
      imported_segwit: 'SegWit importat',
      imported_legacy: 'Legacy importat',
      imported_watchonly: 'Watch-only importat',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transaccions',
      title: 'transaccions',
      description: 'Una llista de transaccions, entrades i sortides del seu moneder',
      conf: 'conf',
    },
    details: {
      title: 'Transacció',
      from: 'De',
      to: 'A',
      copy: 'Copiar',
      transaction_details: 'Detalls de la transacció',
      show_in_block_explorer: "Mostrar en l'explorador de blocs",
    },
  },
  send: {
    header: 'enviar',
    confirm: {
      header: 'Confirmar',
      sendNow: 'Enviar ara',
    },
    success: {
      done: 'Fet',
    },
    details: {
      title: 'Crear Transacció',
      amount_field_is_not_valid: 'Quantitat invalida',
      fee_field_is_not_valid: 'Comissió invalida',
      address_field_is_not_valid: 'Adreça invalida',
      receiver_placeholder: "L'adreça del beneficiari",
      amount_placeholder: 'quantitat a enviar (en BTC)',
      fee_placeholder: 'més la comissió per la transacció (en BTC)',
      note_placeholder: 'comentari (útil per tu)',
      create_tx_error: "S'ha produït un error en crear la transacció. Si us plau, asseguris que l'adreça es valida.",
      cancel: 'Cancel·lar',
      scan: 'Escanejar',
      address: 'Adreça',
      create: 'Crear',
      send: 'Enviar',
      remaining_balance: 'Balanç disponible',
      total_exceeds_balance: 'La quantitat excedeix el balanç disponible.',
    },
    create: {
      title: 'Crear una transacció',
      details: 'Detalls',
      error: "Error en crear una transacció. Són l'adreça i la quantitat valides?",
      go_back: 'Tornar enrere',
      this_is_hex:
        'Això és la representació en hexadecimal (hex) de la transacció, firmada i llesta per ser enviada a la xarxa. ¿Continuar?',
      to: 'A',
      amount: 'Quantitat',
      fee: 'Comissió',
      tx_size: 'Mida de TX',
      satoshi_per_byte: 'satoshiPerByte',
      memo: 'Comentari',
      broadcast: 'Transmetre',
      not_enough_fee: 'Comissió insuficient. Incrementi el valor de la comissió',
    },
  },
  receive: {
    header: 'Rebre',
    details: {
      title: 'Compartir aquesta adreça amb el pagador',
      share: 'Compartir',
      copiedToClipboard: 'Copiat al porta-retalls.',
      label: 'Descripció',
      create: 'Crear',
      setAmount: 'Rebre quantitat',
    },
    scan_lnurl: 'Escanejar per rebre',
  },
  buyBitcoin: {
    header: 'Comprar Bitcoin',
    tap_your_address: 'Clica a la teva adreça  per copiar-la al porta-retalls:',
    copied: 'Adreça copiada!',
  },
  settings: {
    tabBarLabel: 'Configuració',
    header: 'Configuració',
    plausible_deniability: 'Negació plausible...',
    storage_not_encrypted: 'Informació: NO xifrada (es recomana xifrar-la)',
    storage_encrypted: 'Informació: xifrada',
    password: 'Contrasenya',
    password_explain: "Crear la contrasenya que usaràs per desxifrar l'informació dels moneders",
    retype_password: 'Introdueix de nou la contrasenya contrasenya',
    passwords_do_not_match: 'La contrasenya no coincideix',
    encrypt_storage: "Xifrar l'informacio del moneder",
    lightning_settings: 'Configuració Lightning',
    lightning_settings_explain:
      'Per connectar-te al teu propi node LND node instala LndHub' +
      ' i posa la seva URL aquí. Deixa el camp buit per utilitzar el LndHub per defecte ' +
      '\n (lndhub.io)',
    electrum_settings: "Configuració d'Electrum",
    electrum_settings_explain: 'Deixa-ho buit per usar el valor per defecte',
    save: 'guardar',
    about: 'Sobre nosaltres',
    language: 'Idioma',
    currency: 'Moneda',
    advanced_options: 'Configuracions avançades',
    enable_advanced_mode: 'Habilitar el mode avançat',
  },
  plausibledeniability: {
    title: 'Negació plausible',
    help:
      'Sota certes circumstàncies, vostè podria ser obligat a revelar la contrasenya del seu moneder. ' +
      'Per a mantenir les seves monedes segures, BlueWallet pot crear un altre moneder ' +
      'xifrat, amb una altra contrasenya. Si es veu obligat, pot revelar la contrasenya per al fals moneder ' +
      'a un tercer de manera que ells creuran que és el seu moneder principal',
    help2: 'El moneder "false" és completament funcional. Pot dipositar una quantitat mínima perquè sigui més creïble.',
    create_fake_storage: 'Crear informació xifrada falsa',
    go_back: 'Tornar enrere',
    create_password: 'Crear una contrasenya',
    create_password_explanation: 'La contrasenya no pot ser la mateixa que la del seu moneder principal.',
    password_should_not_match: 'La contrasenya no pot ser la mateixa que la del seu moneder principal.',
    retype_password: 'Tornar a escriure la contrasenya',
    passwords_do_not_match: 'Les contrasenyes no coincideixin. Torni-ho a intentar',
    success: 'Exit',
  },
  lnd: {
    title: 'gestionar fons',
    choose_source_wallet: 'Seleccioni un moneder font',
    refill_lnd_balance: 'Recarregar el balanç del moneder Lightning',
    refill: 'Recarregar',
    withdraw: 'Retirar',
    placeholder: 'Factura',
    exchange: 'Exchange',
    expired: 'Caducat',
    sameWalletAsInvoiceError: "No pots pagar una factura amb el mateix moneder que l'ha creat.",
  },
  pleasebackup: {
    title: 'El teu moneder ha estat creat...',
    text: "Si us plau, apunteu en un paper el mnemotècnic. Aquesta 'frase' et permetrà regenerar el teu moneder en altres dispositius.",
    ok: 'OK, ja he assegurat una còpia en paper!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'Aquesta factura no ha estat pagada i ha caducat',
    has_been_paid: 'Aquesta factura ha estat pagada',
    please_pay: 'Si us plau, pagui',
    sats: 'sats',
    for: 'Per:',
    additional_info: 'Informació addicional',
    open_direct_channel: 'Obrir un canal directe amb aquest node:',
  },
  entropy: {
    title: 'Entropy',
    save: 'Save',
    undo: 'Undo',
  },
};
