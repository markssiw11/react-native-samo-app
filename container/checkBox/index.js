import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../constants';
function CheckBox({value = false, onValueChange, disabled}) {
  let iconName = value ? 'check-circle' : 'circle';
  let iconColor = value ? COLORS.primary : COLORS.gray;
  console.log('renderCHECKBOX');
  const onChange = () => {
    if (typeof onValueChange === 'function') {
      onValueChange();
    }
  };
  return (
    <TouchableOpacity disabled={disabled} onPress={onChange} style={{}}>
      <FontAwesome5Icon
        name={iconName}
        size={25}
        solid={value}
        color={iconColor}
      />
    </TouchableOpacity>
  );
}

export default CheckBox;
