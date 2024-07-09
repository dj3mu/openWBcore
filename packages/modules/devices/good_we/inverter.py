#!/usr/bin/env python3
from typing import Dict, Union

from dataclass_utils import dataclass_from_dict
from modules.common import modbus
from modules.common.component_state import InverterState
from modules.common.component_type import ComponentDescriptor
from modules.common.fault_state import ComponentInfo, FaultState
from modules.common.modbus import ModbusDataType
from modules.common.store import get_inverter_value_store
from modules.devices.good_we.config import GoodWeInverterSetup
from modules.devices.good_we.version import GoodWeVersion


class GoodWeInverter:
    def __init__(self,
                 device_id: int,
                 modbus_id: int,
                 version: GoodWeVersion,
                 firmware: int,
                 component_config: Union[Dict, GoodWeInverterSetup],
                 tcp_client: modbus.ModbusTcpClient_) -> None:
        self.__modbus_id = modbus_id
        self.version = version
        self.firmware = firmware
        self.component_config = dataclass_from_dict(GoodWeInverterSetup, component_config)
        self.__tcp_client = tcp_client
        self.store = get_inverter_value_store(self.component_config.id)
        self.fault_state = FaultState(ComponentInfo.from_component_config(self.component_config))

    def update(self) -> None:
        with self.__tcp_client:
            if self.version == GoodWeVersion.V_1_7:
                power = sum([self.__tcp_client.read_holding_registers(
                    reg, ModbusDataType.UINT_32, unit=self.__modbus_id)
                    for reg in [35105, 35109, 35113, 35117]]) * -1
            else:
                power = self.__tcp_client.read_holding_registers(
                    35137, ModbusDataType.UINT_32, unit=self.__modbus_id) * -1
            exported = self.__tcp_client.read_holding_registers(
                35191, ModbusDataType.UINT_32, unit=self.__modbus_id) * 100

        inverter_state = InverterState(
            power=power,
            exported=exported
        )
        self.store.set(inverter_state)


component_descriptor = ComponentDescriptor(configuration_factory=GoodWeInverterSetup)
